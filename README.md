# djangoUpload

In this project I used RESP API to get data from 'CSV' and upload to database. And whenever there is a GET request the data will be viewed in HTML response. Every time there is a GET request, it will be logged in the database.<br>
First App named 'upload' gets the Data from 'CSV' and transfers it to Database using POST. <br>
Second App named 'viewCsv' fetches the database using GET requests and displays the data in HTML.

#### I used Anaconda for development of this project
Start with creating a new environment

```python
conda create -n myenv python=3.6
```
Activating the new environment

```python
conda activate myenv
```
Install Required Packages from Requirements.txt
```python
pip install -r Requirements.txt
```
After changng the directory to project directory, run server using
```python
python manage.py runserver
```
