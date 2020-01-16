from django.db import models


class Task(models.Model):
    id = models.IntegerField(primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    temperature = models.DecimalField(max_digits=20, decimal_places=15)
    duration = models.CharField(max_length=50)

    def __str__(self):
        return self.id
