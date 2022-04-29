from django.urls import path, include
from rest_framework.routers import DefaultRouter
from backend import views


router = DefaultRouter()
router.register(r'query', views.wordsViewSet,basename="query")
urlpatterns = [
    path('', include(router.urls)),
   
]










# from django.urls import path
# from backend import views
# from rest_framework.urlpatterns import format_suffix_patterns
# urlpatterns = [
#     path('backend/', views.wordsList.as_view()),
#     path('backend/<int:pk>/', views.wordDetail.as_view()),
#     path('', views.api_root),
#     # path('backend/<int:pk>/highlight/', views.wordHighlight.as_view()),
# ]


# urlpatterns = format_suffix_patterns(urlpatterns)




# from django.urls import path

# from . import views

# urlpatterns = [
#   path('', views.index, name='index'),
#   path('add/', views.add, name='add'),
#   path('add/addrecord/', views.addrecord, name='addrecord'),
#   path('delete/<int:id>', views.delete, name='delete'),
#   path('update/<int:id>', views.update, name='update'),
#   path('update/updaterecord/<int:id>', views.updaterecord, name='updaterecord'),
# ]