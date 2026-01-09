from django.db import models

class Vendor(models.Model):
    id = models.BigAutoField(primary_key=True)
    vendor_code = models.CharField(max_length=20, unique=True, editable=False, verbose_name="Vendor Code")
    vendor_name = models.CharField(max_length=255, verbose_name="Vendor Name")
    contact_person = models.CharField(max_length=255, blank=True, null=True, verbose_name="Contact Person")
    contact_number = models.CharField(max_length=20, blank=True, null=True, verbose_name="Contact Number")
    email = models.EmailField(max_length=255, blank=True, null=True, verbose_name="Email")
    address = models.TextField(blank=True, null=True, verbose_name="Address")
    gst_number = models.CharField(max_length=100, blank=True, null=True, verbose_name="GST Number")
    drug_license_no = models.CharField(max_length=100, blank=True, null=True, verbose_name="Drug License Number")
    pan_number = models.CharField(max_length=20, blank=True, null=True, verbose_name="PAN Number")
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not self.vendor_code:
            self.vendor_code = f"V-{self.id}"
            super().save(update_fields=['vendor_code'])

    def __str__(self):
        return f"{self.vendor_code} - {self.vendor_name}"

    class Meta:
        db_table = "vendor"
        ordering = ["vendor_name"]
        verbose_name = "Vendor"
        verbose_name_plural = "Vendors"
