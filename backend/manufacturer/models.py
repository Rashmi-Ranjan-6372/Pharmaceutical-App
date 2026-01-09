from django.db import models

class Manufacturer(models.Model):
    id = models.BigAutoField(primary_key=True)
    mfg_code = models.CharField(max_length=20, unique=True, editable=False, verbose_name="Manufacturer Code")
    mfg_name = models.CharField(max_length=255, unique=True, verbose_name="Manufacturer Name")
    mfg_short = models.CharField(max_length=50, blank=True, null=True, unique=True, verbose_name="Short Code")
    contact_person = models.CharField(max_length=255, blank=True, null=True)
    contact_phone = models.CharField(max_length=20, blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)
    mr_name = models.CharField(max_length=255, blank=True, null=True)
    mr_phone = models.CharField(max_length=20, blank=True, null=True)
    mfg_address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, default="India")
    pincode = models.CharField(max_length=10, blank=True, null=True)
    gst_number = models.CharField(max_length=20, blank=True, null=True, unique=True)
    drug_license_no = models.CharField(max_length=50, blank=True, null=True, unique=True)
    pan_number = models.CharField(max_length=10, blank=True, unique=True, null=True)
    purchase_discount_rate = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    purchase_discount_mode = models.CharField(max_length=20, choices=[('percentage','Percentage'),('flat','Flat')], default='percentage')
    sales_discount_rate = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    sales_discount_mode = models.CharField(max_length=20, choices=[('percentage','Percentage'),('flat','Flat')], default='percentage')
    is_active = models.BooleanField(default=True)
    remarks = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not self.mfg_code:
            self.mfg_code = f"MFG-{self.id}"
            super().save(update_fields=['mfg_code'])

    def __str__(self):
        return f"{self.mfg_code} - {self.mfg_name}"

    class Meta:
        db_table = "manufacturer"
        ordering = ["mfg_name"]
        verbose_name = "Manufacturer"
        verbose_name_plural = "Manufacturers"
