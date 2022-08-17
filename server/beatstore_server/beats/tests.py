from pydoc import classname
from django.test import TestCase
from models import Artist, Beat

# Create your tests here.
class BeatTestCase(TestCase):
    def setUp(self):
        Beat.objects.create(name="Life", bpm=120, artist="")