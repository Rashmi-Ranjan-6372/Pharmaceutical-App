from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Vendor
from .serializers import VendorSerializer
# ------------------------------------------------------------
# List all vendors + Search + Filter + Sort | Create a vendor
# ------------------------------------------------------------
class VendorListCreateAPIView(APIView):

    def get(self, request):
        search = request.query_params.get("search", "")
        status_filter = request.query_params.get("status", "")
        order = request.query_params.get("order", "asc")

        vendors = Vendor.objects.all()

        # -------------------
        # Search by Name
        # -------------------
        if search:
            vendors = vendors.filter(
                Q(vendorName__icontains=search) |
                Q(contactPerson__icontains=search)
            )
        # -------------------
        # Filter by Status
        # -------------------
        if status_filter:
            vendors = vendors.filter(status__iexact=status_filter)
        # -------------------
        # Sorting ASC / DESC
        # -------------------
        if order == "desc":
            vendors = vendors.order_by("-vendorName")
        else:
            vendors = vendors.order_by("vendorName")

        serializer = VendorSerializer(vendors, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# -----------------------------------------
# Get / Update / Delete a specific vendor
# -----------------------------------------
class VendorDetailAPIView(APIView):

    def get_object(self, vendorId):
        return get_object_or_404(Vendor, vendorId=vendorId)

    def get(self, request, vendorId):
        vendor = self.get_object(vendorId)
        serializer = VendorSerializer(vendor)
        return Response(serializer.data)

    def put(self, request, vendorId):
        vendor = self.get_object(vendorId)
        serializer = VendorSerializer(vendor, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, vendorId):
        vendor = self.get_object(vendorId)
        vendor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
