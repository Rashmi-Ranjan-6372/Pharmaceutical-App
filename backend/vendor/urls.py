from django.urls import path
from .views import VendorListCreateAPIView, VendorDetailAPIView

urlpatterns = [
    path("vendor/", VendorListCreateAPIView.as_view(), name="vendor-list-create"),
    path("vendor/<str:vendorId>/", VendorDetailAPIView.as_view(), name="vendor-detail"),
]
