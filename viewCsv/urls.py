from django.urls import path

from . import views

app_name = "viewCsv"

urlpatterns = [
    path('', views.homeViewCsv, name='homeViewCsv'),
]