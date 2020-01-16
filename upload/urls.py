from django.urls import path

from . import views

app_name = "upload"

urlpatterns = [
    path('', views.homeUpload, name='homeUpload'),
    path('table/', views.viewCsv.as_view()),
]