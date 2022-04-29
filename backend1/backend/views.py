from requests import Response
from backend.models import Words
from backend.serializers import wordsSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import Http404

class wordsViewSet(viewsets.ModelViewSet):
    queryset = Words.objects.all()
    serializer_class = wordsSerializer
    def get_object(self, pk):
        try:
            return Words.objects.get(pk=pk)
        except Words.DoesNotExist:
            raise Http404
    
    def retrieve(self,request,*args,**kwargs):
      
        words=Words.objects.filter(English=kwargs['pk'])
        if words.exists():
           serializer=wordsSerializer(words,many=True)
           return Response({ "success": True, "data": serializer.data[0] })

        return Response({ "success": False, "msg": 'word not found' })

   

    def update(self, request, pk, format=None):
        word=self.get_object(pk)
        serializer = wordsSerializer(word, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({ "success": True, "msg": 'word updeted successfully' })
        
        return Response({ "success": False, "msg": 'failed to update the word' })
        
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk, format=None):

        try:
          word=Words.objects.get(pk=pk)
          word.delete()
          return Response({ "success": True, "msg": 'word deleted successfully' })
        except Words.DoesNotExist:
          return Response({ "success":False, "msg": 'failed to delete the word' })



    def create(self,request,*args,**kwargs):
        serializer = wordsSerializer(data=request.data)
        if serializer.is_valid():
           serializer.save()
           return Response({ "success": True, "msg": 'word created successfully' })
        
        return Response({ "success": False, "msg": 'failed to create the word' })

# class wordsList(generics.ListCreateAPIView):
#     queryset = Words.objects.all()
#     serializer_class = wordsSerializer
# class wordDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Words.objects.all()
#     serializer_class = wordsSerializer
# class wordHighlight(generics.GenericAPIView):
#     queryset = Words.objects.all()
#     renderer_classes = [renderers.StaticHTMLRenderer]

#     def get(self, request, *args, **kwargs):
#         word = self.get_object()
#         return Response(word.English)
# from django.http import HttpResponse, HttpResponseRedirect
# from django.template import loader
# from django.urls import reverse
# from .models import Members
# def index(request):
#   mymembers = Members.objects.all().values()
#   template = loader.get_template('index.html')
#   context = {
#     'mymembers': mymembers
#   }
#   return HttpResponse(template.render(context, request))
  
# def add(request):
#   template = loader.get_template('add.html')
#   return HttpResponse(template.render({}, request))
  
# def addrecord(request):
#   first = request.POST['first']
#   last = request.POST['last']
#   member = Members(firstname=first, lastname=last)
#   member.save()
  
#   return HttpResponseRedirect(reverse('index'))

# def delete(request, id):
#   member = Members.objects.get(id=id)
#   member.delete()
#   return HttpResponseRedirect(reverse('index'))
  
# def update(request, id):
#   mymember = Members.objects.get(id=id)
#   template = loader.get_template('update.html')
#   context = {
#     'mymember': mymember,
#   }
#   return HttpResponse(template.render(context, request))


# def updaterecord(request, id):
#   first = request.POST['first']
#   last = request.POST['last']
#   member = Members.objects.get(id=id)
#   member.firstname = first
#   member.lastname = last
#   member.save()
#   return HttpResponseRedirect(reverse('index'))



     
        # try:
        #   words=Words.objects.get(English=kwargs['pk']) 
        #   print("more")
        #   serializer=wordsSerializer(words,many=True)
        # except ords.DoesNotExist:
        #   print("jioriroio")
        #   return Response({ "success": False, "msg": 'word not found' })

        
        # return Response({ "success": True, "data": serializer.data[0] })
        # # words=   Words.objects.filter(English=kwargs['pk']) 
        
        
        # return Response({ "success": True, "data": serializer.data[0] })