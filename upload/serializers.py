from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': False},
            'timestamp': {'read_only': False},
        }

        def create(self, validated_data):
            """
            Create and return a new `Snippet` instance, given the validated data.
            """
            return Snippet.objects.create(**validated_data)

        def update(self, instance, validated_data):
            """
            Update and return an existing `Snippet` instance, given the validated data.
            """
            instance.id = validated_data.get('id', instance.id)
            instance.timestamp = validated_data.get('timestamp', instance.timestamp)
            instance.temperature = validated_data.get('temperature', instance.temperature)
            instance.duration = validated_data.get('duration', instance.duration)
            instance.save()
            return instance