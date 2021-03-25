_______________________________________________

                    TODO
_______________________________________________

1. Setting validations to restrict same name 
of uploaded shp

2. Validations for file types

3.
_______________________________________________

1. Install Java JRE 8
2. Install Geoserver 2.15.1
3. Install Geoserver-rest (uhh idk)
4. Install Postgresql with POSTGIS
5. Install Python 3.9

1. create a folder for django
2. run "pip install virtualenv"
3. init venv by using "virtualenv .\venv"
4. start the virtualenv by running the bat file ".\venv\Scripts\activate"
5. run "pip install pipwin"
6. run "pipwin install gdal"
7. run "pipwin refresh" to refresh cache and if installation fails
8. run "pip install django"
9. run "django-admin startproject geoApp"
10. run "pip install psycopg2"


- Always check if you are in the virtualenv -
".\venv\Scripts\activate"

- Running the server -
"python manage.py runserver"

- Changing the settings.py DATABASES -
1. create a database
2. DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'geoapp',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

-  gdal problem -
1. add this to settings.py

import os

#fixing the gdal problem
1. 
if os.name == 'nt':
    VENV_BASE = os.environ['VIRTUAL_ENV']
    os.environ['PATH'] = os.path.join(VENV_BASE, 'Lib\\site-packages\\osgeo') + ';' + os.environ['PATH']
    os.environ['PROJ_LIB'] = os.path.join(VENV_BASE, 'Lib\\site-packages\\osgeo\\data\\proj') + ';' + os.environ['PATH']

2. Check what gdal version you have in "/path/to/virtual_env/Lib/site-packages/osgeo" e.g. gdal302.dll

3. add the version in the array in "/path/to/virtual_env/Lib/site-packages/django/contrib/gis/gdal/libgdal.py"

elif os.name == 'nt':
    # Windows NT shared libraries
    lib_names = ['gdal302', 'gdal300', 'gdal204', 'gdal203', 'gdal202', 'gdal201', 'gdal20']


- adding template directory in settings.py-
1. 
TEMPLATES = [
    {        
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
    }
]
2. create new folder called templates inside the app folder

- Adding STATIC ROOT -
1.
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'geoApp/static')]

2. Create folder "geoApp/geoApp/static"

- Adding new URL in urls.py - 
1. 
urlpatterns = [
    path('admin/', admin.site.urls),

]

- Adding app in the project folder -
//To create web app templates
1. run "python manage.py startapp shp"

- Create Superuser in django -
1. run "python manage.py migrate"
2. run "python manage.py createsuperuser"

- Migrate models in django -
1. run "python manage.py makemigrations"
2. run "python manage.py migrate"

- COPY all the static files from DIR -
1. run "python manage.py collectstatic"
