#!/bin/bash

INK=/Applications/Inkscape.app/Contents/Resources/bin/inkscape

if [[ -z "$1" ]] 
then
	echo "SVG file needed."
	exit;
fi
DIR=`pwd`;
echo "Current working directory: $DIR"
BASE=`basename "$1" .svg`
SVG="$DIR/$1"

#iTunes Artwork
$INK -z -D -e "$DIR/$BASE-512.png" -f 	$SVG -w 512 -h 512
$INK -z -D -e "$DIR/$BASE-1024.png" -f 	$SVG -w 1024 -h 1024

cp "$DIR/$BASE-512.png" iTunesArtwork.png
cp "$DIR/$BASE-1024.png" iTunesArtwork@2x.png

#### IONIC
$INK -z -D -e "$DIR/icon.png" -f 	$SVG -w 57 -h 57
$INK -z -D -e "$DIR/icon@2x.png" -f 	$SVG -w 114 -h 114
$INK -z -D -e "$DIR/icon-small.png" -f 	$SVG -w 29 -h 29
$INK -z -D -e "$DIR/icon-small@2x.png" -f 	$SVG -w 58 -h 58
$INK -z -D -e "$DIR/icon-small@3x.png" -f 	$SVG -w 87 -h 87
$INK -z -D -e "$DIR/icon-40.png" -f 	$SVG -w 40 -h 40
$INK -z -D -e "$DIR/icon-40@2x.png" -f 	$SVG -w 80 -h 80
$INK -z -D -e "$DIR/icon-40@3x.png" -f 	$SVG -w 120 -h 120
$INK -z -D -e "$DIR/icon-50.png" -f 	$SVG -w 50 -h 50
$INK -z -D -e "$DIR/icon-50@2x.png" -f 	$SVG -w 100 -h 100
$INK -z -D -e "$DIR/icon-60.png" -f 	$SVG -w 60 -h 60
$INK -z -D -e "$DIR/icon-60@2x.png" -f 	$SVG -w 120 -h 120
$INK -z -D -e "$DIR/icon-60@3x.png" -f 	$SVG -w 180 -h 180
$INK -z -D -e "$DIR/icon-72.png" -f 	$SVG -w 72 -h 72
$INK -z -D -e "$DIR/icon-72@2x.png" -f 	$SVG -w 144 -h 144
$INK -z -D -e "$DIR/icon-76.png" -f 	$SVG -w 76 -h 76
$INK -z -D -e "$DIR/icon-76@2x.png" -f 	$SVG -w 152 -h 152
$INK -z -D -e "$DIR/icon-83.5@3x.png" -f 	$SVG -w 167 -h 167


