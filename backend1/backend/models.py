from django.db import models

class Members(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  class Meta:
        ordering = ['lastname']


class Words(models.Model):
  
  English=models.CharField(max_length=255)
  French=models.CharField(max_length=255)
  Arabic=models.CharField(max_length=255)


# from backend.models import Members
# from backend.serializers import membersSerializer
# from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParse