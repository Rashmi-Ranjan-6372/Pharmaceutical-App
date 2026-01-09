from django.urls import path
from .views import (
    ManufacturerListCreateAPIView,
    ManufacturerDetailAPIView,
    ManufacturerDuplicateCheckAPIView,
)

urlpatterns = [
    # =========================
    # List all / Create
    # =========================
    path(
        '',
        ManufacturerListCreateAPIView.as_view(),
        name='manufacturer-list-create'
    ),

    # =========================
    # Live duplicate check
    # =========================
    path(
        'check-duplicate/',
        ManufacturerDuplicateCheckAPIView.as_view(),
        name='manufacturer-duplicate-check'
    ),

    # =========================
    # Retrieve / Update / Delete
    # =========================
    path(
        '<str:mfg_code>/',
        ManufacturerDetailAPIView.as_view(),
        name='manufacturer-detail'
    ),
]
