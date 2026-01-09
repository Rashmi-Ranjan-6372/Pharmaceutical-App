from rest_framework import serializers
from .models import Product
from manufacturer.models import Manufacturer


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = (
            'id',
            'product_code',
            'created_at',
            'updated_at',
        )

    # --------------------------------------------------
    # Field-level validation for rack_code
    # User enters: 1, 2, 3 → model saves as R-1, R-2
    # --------------------------------------------------
    def validate_rack_code(self, value):
        if value:
            clean_value = value.replace("R-", "")
            if not clean_value.isdigit():
                raise serializers.ValidationError(
                    "Enter rack number only (e.g. 1, 2, 3)."
                )
        return value

    # --------------------------------------------------
    # Field-level validation for manufacturer
    # --------------------------------------------------
    def validate_manufacturer(self, value):
        if not value.is_active:
            raise serializers.ValidationError(
                "Selected manufacturer is inactive."
            )
        return value

    # --------------------------------------------------
    # Global validation
    # --------------------------------------------------
    def validate(self, attrs):
        name = attrs.get('name')
        manufacturer = attrs.get('manufacturer')

        # Detect update operation
        instance = getattr(self, 'instance', None)

        # --------------------------
        # Duplicate product name
        # (same manufacturer)
        # --------------------------
        if name and manufacturer:
            qs = Product.objects.filter(
                name__iexact=name,
                manufacturer=manufacturer,
                is_deleted=False
            )
            if instance:
                qs = qs.exclude(pk=instance.pk)

            if qs.exists():
                raise serializers.ValidationError({
                    "name": "This product already exists for this manufacturer."
                })

        return attrs
