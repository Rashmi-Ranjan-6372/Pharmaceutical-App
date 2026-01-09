from django.contrib import admin
from .models import Manufacturer

@admin.register(Manufacturer)
class ManufacturerAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'mfg_code',
        'mfg_name',
        'mfg_short',
        'mr_name',
        'mr_phone',
        'purchase_discount_rate',
        'sales_discount_rate',
        'is_active',
    )
    search_fields = ('mfg_code', 'mfg_name', 'mfg_short')  # Required for autocomplete
    list_filter = ('is_active',)
    ordering = ('mfg_name',)
