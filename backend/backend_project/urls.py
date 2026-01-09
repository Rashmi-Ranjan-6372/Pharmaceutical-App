from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/manufacturers/', include('manufacturer.urls')),         
    path('api/vendors/', include('vendor.urls')),
    path('api/products/', include('product.urls')),                      
]
