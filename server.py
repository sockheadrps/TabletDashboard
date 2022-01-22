from urllib import request
import hug
import subprocess
from pywinauto.application import Application



@hug.get(output=hug.output_format.html)
@hug.static('/app')
def my_static_dirs():
    return('.')


@hug.get('/gyazo')
@hug.local()
def gyazo():
	gyazo = Application().start(r"C:\Program Files (x86)\Gyazo\Gyazowin.exe")
	print(f"request....{request.data}")

@hug.get('/calc')
@hug.local()
def calc():
	calc = Application().start(r'C:\Windows\System32\calc.exe')
	return {"calc"}
