import os
import matplotlib.pyplot as plt
from django.conf import settings

def save_plot(filename):
    media_path = os.path.join(settings.MEDIA_ROOT, filename)
    web_path = os.path.join(settings.MEDIA_URL, filename)

    plt.savefig(media_path)
    plt.close()

    return web_path  # this is returned to frontend as image URL
