from rest_framework import serializers
from .models import Manufacturer


class ManufacturerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Manufacturer
        fields = "__all__"
        read_only_fields = (
            "id",
            "mfg_code",
            "created_at",
            "updated_at",
        )

    def validate(self, attrs):
        """
        Global validation:
        - Prevent duplicate entries
        - Safe for Create + Update
        - Auto-uppercase GST / PAN / License
        """

        instance = getattr(self, "instance", None)

        def check_duplicate(field_name, value, message):
            """
            Generic duplicate checker
            """
            if not value:
                return

            qs = Manufacturer.objects.filter(
                **{f"{field_name}__iexact": value}
            )

            if instance:
                qs = qs.exclude(id=instance.id)

            if qs.exists():
                raise serializers.ValidationError({
                    field_name: message
                })

        # --------------------------------
        # Normalize (uppercase)
        # --------------------------------
        if attrs.get("gst_number"):
            attrs["gst_number"] = attrs["gst_number"].upper()

        if attrs.get("pan_number"):
            attrs["pan_number"] = attrs["pan_number"].upper()

        if attrs.get("drug_license_no"):
            attrs["drug_license_no"] = attrs["drug_license_no"].upper()

        # --------------------------------
        # Duplicate validations
        # --------------------------------
        check_duplicate(
            "mfg_name",
            attrs.get("mfg_name"),
            "Manufacturer name already exists."
        )

        check_duplicate(
            "mfg_short",
            attrs.get("mfg_short"),
            "Manufacturer short code already exists."
        )

        check_duplicate(
            "gst_number",
            attrs.get("gst_number"),
            "GST number already exists."
        )

        check_duplicate(
            "pan_number",
            attrs.get("pan_number"),
            "PAN number already exists."
        )

        check_duplicate(
            "drug_license_no",
            attrs.get("drug_license_no"),
            "Drug license number already exists."
        )

        return attrs
