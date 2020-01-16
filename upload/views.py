from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import Task
from . serializers import TaskSerializer
import json
import logging



class viewCsv(APIView):
    def get(self, request):
        table = Task.objects.all()
        serializer = TaskSerializer(table, many=True)
        db_logger = logging.getLogger('db')
        db_logger.info('Data Requested')

        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        for x in Task.objects.all().iterator(): x.delete()
        data = json.loads(request.body)
        serializer = TaskSerializer(data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def homeUpload(request):
    return render(request, 'upload/homeUpload.html', {})