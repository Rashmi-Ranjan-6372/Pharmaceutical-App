from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.db.models import Q

from .models import Manufacturer
from .serializers import ManufacturerSerializer


# ============================
# List all / Create new
# ============================
class ManufacturerListCreateAPIView(APIView):

    def get(self, request):
        """
        List all manufacturers
        Optional search:
        /api/manufacturers/?search=cipla
        """

        search = request.GET.get("search")

        manufacturers = Manufacturer.objects.all()

        # ✅ SEARCH BY MANUFACTURER NAME
        if search:
            manufacturers = manufacturers.filter(
                Q(mfg_name__icontains=search)
            )

        serializer = ManufacturerSerializer(manufacturers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ManufacturerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# ============================
# Retrieve / Update / Delete
# ============================
class ManufacturerDetailAPIView(APIView):

    def get_object(self, mfg_code):
        """
        Fetch manufacturer using staff-friendly code
        Example: MFG-1
        """
        return get_object_or_404(
            Manufacturer,
            mfg_code=mfg_code
        )

    def get(self, request, mfg_code):
        manufacturer = self.get_object(mfg_code)
        serializer = ManufacturerSerializer(manufacturer)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, mfg_code):
        manufacturer = self.get_object(mfg_code)
        serializer = ManufacturerSerializer(
            manufacturer,
            data=request.data,
            partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, mfg_code):
        manufacturer = self.get_object(mfg_code)
        manufacturer.delete()
        return Response(
            {"detail": "Manufacturer deleted successfully."},
            status=status.HTTP_204_NO_CONTENT
        )


# ============================
# Live Duplicate Check API
# ============================
class ManufacturerDuplicateCheckAPIView(APIView):
    """
    Used for live duplicate check (onBlur)
    Example:
    /api/manufacturers/check-duplicate/?field=gst_number&value=22ABCDE1234F1Z5
    """

    ALLOWED_FIELDS = [
        "mfg_name",
        "mfg_short",
        "gst_number",
        "pan_number",
        "drug_license_no",
    ]

    def get(self, request):
        field = request.GET.get("field")
        value = request.GET.get("value")

        if not field or not value:
            return Response(
                {"error": "Field and value are required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if field not in self.ALLOWED_FIELDS:
            return Response(
                {"error": "Invalid field"},
                status=status.HTTP_400_BAD_REQUEST
            )

        filter_kwargs = {f"{field}__iexact": value}
        is_duplicate = Manufacturer.objects.filter(**filter_kwargs).exists()

        return Response(
            {
                "field": field,
                "value": value,
                "is_duplicate": is_duplicate,
            },
            status=status.HTTP_200_OK
        )
