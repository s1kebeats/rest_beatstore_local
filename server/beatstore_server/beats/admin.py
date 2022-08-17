from django.contrib import admin
from .models import Artist, Beat

@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    pass

@admin.register(Beat)
class BeatAdmin(admin.ModelAdmin):
    pass
