from django.contrib import admin
from .models import Vendor

@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    list_display = (
        'vendor_code',
        'vendor_name',
        'contact_person',
        'contact_number',
        'email',
        'is_active',
        'gst_number',
        'created_at',
    )

    search_fields = (
        'vendor_code',
        'vendor_name',
        'contact_person',
        'contact_number',
        'email',
        'gst_number',
        'drug_license_no',
        'pan_number',
    )

    list_filter = (
        'is_active',
        'created_at',
        'updated_at',
    )

    readonly_fields = (
        'vendor_code',
        'created_at',
        'updated_at',
    )
