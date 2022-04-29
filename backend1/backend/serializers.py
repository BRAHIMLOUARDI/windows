
from rest_framework import serializers
from backend.models import Members
from backend.models import Words



class membersSerializer(serializers.ModelSerializer):

      class Meta:
          model=Members
          fields = ['firstname','lastname']

       


class wordsSerializer(serializers.ModelSerializer):
      class Meta:
          model=Words
          fields = ['id','English','French','Arabic']
      