import re
# from urllib import request, response
from flask import Flask, render_template, request
import subprocess
from pywinauto.application import Application 
import webbrowser
import pyautogui
import urllib.request
import json
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, ISimpleAudioVolume, IAudioEndpointVolume

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")


@app.route("/gyazo")
def gyazo():
	gyazo = Application().start(r"C:\Program Files (x86)\Gyazo\Gyazowin.exe")
	return 'OK'

@app.route("/calculator")
def calc():
	calc = Application().start(r'C:\Windows\System32\calc.exe')
	return 'OK'

@app.route("/google")
def google():
	webbrowser.open_new('www.google.com')
	return 'OK'

@app.route("/youtube")
def youtube():
	webbrowser.open_new('www.youtube.com')
	return 'OK'

@app.route("/spotify")
def spotify():
	webbrowser.open_new('www.spotify.com')
	return 'OK'

@app.route("/instagram")
def instagram():
	webbrowser.open_new('www.instagram.com')
	return 'OK'

@app.route("/play")
def play():
	pyautogui.keyDown('playpause')
	return 'OK'

@app.route("/next")
def next():
	pyautogui.keyDown('nexttrack')
	return 'OK'

@app.route("/previous")
def previous():
	pyautogui.keyDown('prevtrack')
	return 'OK'

@app.route("/volume", methods=['POST'])
def volume():
	req = request.data.decode('UTF-8)')
	req = json.loads(req)
	new_vol = int(req['volume'])/100

	sessions = AudioUtilities.GetAllSessions()
	for session in sessions:
		print(session)
		volume = session._ctl.QueryInterface(ISimpleAudioVolume)
		if session.Process and session.Process.name() == "vlc.exe":
			print("volume.GetMasterVolume(): %s" % volume.GetMasterVolume())
			volume.SetMasterVolume(0.6, None)

		# Get default audio device using PyCAW
		devices = AudioUtilities.GetSpeakers()
		interface = devices.Activate(
			IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
		volume = cast(interface, POINTER(IAudioEndpointVolume))
	volume.SetMasterVolumeLevelScalar(new_vol, None)
	return 'OK'


	   
if __name__ == "__main__":
	app.run(debug=True, host='192.168.1.66')