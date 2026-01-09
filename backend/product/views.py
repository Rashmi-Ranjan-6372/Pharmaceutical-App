from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Product
from .serializers import ProductSerializer

class ProductListCreateView(APIView):

    def get(self, request):
        search = request.query_params.get("search", "")
        manufacturer = request.query_params.get("manufacturer", "")
        category = request.query_params.get("category", "")
        rack = request.query_params.get("rack", "")

        products = Product.objects.filter(is_deleted=False)

        # -------------------------
        # Search (name, generic, sku)
        # -------------------------
        if search:
            products = products.filter(
                Q(name__icontains=search) |
                Q(generic_name__icontains=search) |
                Q(sku__icontains=search)
            )

        # -------------------------
        # Filter by Manufacturer
        # (ID or MFG code)
        # -------------------------
        if manufacturer:
            products = products.filter(
                Q(manufacturer__id=manufacturer) |
                Q(manufacturer__mfg_code__iexact=manufacturer)
            )

        # -------------------------
        # Filter by Category
        # -------------------------
        if category:
            products = products.filter(category__iexact=category)

        # -------------------------
        # Filter by Rack Code
        # -------------------------
        if rack:
            products = products.filter(rack_code__iexact=rack)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data

        # ---------------------------
        # Bulk insert
        # ---------------------------
        if isinstance(data, list):
            serializer = ProductSerializer(data=data, many=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # ---------------------------
        # Single insert
        # ---------------------------
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ProductDetailView(APIView):

    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk, is_deleted=False)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = get_object_or_404(Product, pk=pk, is_deleted=False)
        serializer = ProductSerializer(
            product,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        product = get_object_or_404(Product, pk=pk)

        # Soft delete (recommended)
        product.is_deleted = True
        product.save(update_fields=["is_deleted"])

        return Response(
            {"message": "Product deleted successfully."},
            status=status.HTTP_204_NO_CONTENT
        )
