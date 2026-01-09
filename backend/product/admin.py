from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'product_code',
        'name',
        'generic_name',
        'manufacturer',
        'category',
        'rack_code',
        'is_active',
        'created_at',
    )

    list_display_links = ('product_code', 'name')

    search_fields = (
        'product_code',
        'name',
        'generic_name',
        'manufacturer__mfg_name',
    )

    list_filter = (
        'category',
        'is_active',
        'manufacturer',
    )

    readonly_fields = (
        'product_code',
        'created_at',
        'updated_at',
    )

    ordering = ('name',)

    autocomplete_fields = ('manufacturer',)
