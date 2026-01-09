from django.db import models
from manufacturer.models import Manufacturer

class Product(models.Model):
    id = models.BigAutoField(primary_key=True)
    product_code = models.CharField(max_length=20, unique=True, editable=False, verbose_name="Product Code")
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE, related_name="products", verbose_name="Manufacturer")
    name = models.CharField(max_length=255, verbose_name="Medicine Name")
    generic_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Generic Name")
    sku = models.CharField(max_length=100, blank=True, null=True, verbose_name="SKU")
    weight = models.CharField(max_length=50, blank=True, null=True, verbose_name="Weight")

    MEDICINE_CATEGORIES = [
        ('Tablet','Tablet'), ('Capsule','Capsule'), ('Syrup','Syrup'), ('Injection','Injection'),
        ('Ointment','Ointment'), ('Cream','Cream'), ('Gel','Gel'), ('Drops','Drops'), ('Powder','Powder'),
        ('Suspension','Suspension'), ('Solution','Solution'), ('Inhaler','Inhaler'), ('Spray','Spray'),
        ('Lotion','Lotion'), ('Granules','Granules'), ('Suppository','Suppository'), ('Patch','Patch'),
        ('IV Fluid','IV Fluid'), ('Sachet','Sachet'), ('Kit','Kit'), ('Medical Device','Medical Device'),
        ('Nutraceutical','Nutraceutical'), ('Ayurvedic','Ayurvedic'), ('Homeopathic','Homeopathic'),
        ('Surgical','Surgical'), ('Others','Others')
    ]
    category = models.CharField(max_length=50, choices=MEDICINE_CATEGORIES, default='Tablet', verbose_name="Category")
    mfg_code = models.CharField(max_length=50, blank=True, null=True)
    rack_code = models.CharField(max_length=50, blank=True, null=True)
    packing_code = models.CharField(max_length=50, blank=True, null=True)
    purchase_tax_code = models.CharField(max_length=50, blank=True, null=True)
    purchase_discount_rate = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    purchase_discount_mode = models.CharField(max_length=20, choices=[('percentage','Percentage'),('flat','Flat')], default='percentage')
    sales_tax_code = models.CharField(max_length=50, blank=True, null=True)
    sales_discount_rate = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    sales_discount_mode = models.CharField(max_length=20, choices=[('percentage','Percentage'),('flat','Flat')], default='percentage')
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not self.product_code:
            self.product_code = f"P-{self.id}"
            super().save(update_fields=['product_code'])
        if self.rack_code and not self.rack_code.startswith("R-"):
            self.rack_code = f"R-{self.rack_code}"
            super().save(update_fields=['rack_code'])

    def __str__(self):
        return f"{self.product_code} - {self.name}"

    class Meta:
        db_table = "product"
        ordering = ["name"]
        verbose_name = "Product"
        verbose_name_plural = "Products"
