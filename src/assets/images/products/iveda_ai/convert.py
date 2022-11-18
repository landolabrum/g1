import os
os.environ["IMAGEIO_FFMPEG_EXE"] = "/opt/homebrew/bin/ffmpeg"
import moviepy.editor as moviepy
for m in ["weapon_detection"]:
  clip = moviepy.VideoFileClip(f'/Users/landonlabrum/code/clients/g1/src/assets/images/products/iveda_ai/{m}.mp4')
  clip.write_videofile(f'/Users/landonlabrum/code/clients/g1/src/assets/images/products/iveda_ai/{m}.webm')  
