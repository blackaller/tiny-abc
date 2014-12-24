from __future__ import division  ## Python 2 users only
import nltk, re, pprint
from nltk import word_tokenize
from urllib import urlopen


## get text from URL
my_url = 'https://raw.githubusercontent.com/blackaller/tiny-abc/master/txt/escritura-descompuesta.txt' # path to file online
response = urlopen(my_url)
my_text = response.read().decode('utf8')
# print my_text
my_tokens = word_tokenize(my_text)

## get text from local file
# my_path = 'txt/escritura-descompuesta.txt' ## path to file
# my_file = open(my_path, 'rU')
# my_text = my_file.read()
# print my_text
# my_tokens = word_tokenize(my_text.decode('utf-8'))


len(my_tokens)
my_nltext = nltk.Text(my_tokens)

## some rough cleanup. need to be more delicate
# my_words = [w.lower() for w in my_nltext] includes non-word characters
my_words = [w.lower() for w in my_nltext if w.isalpha()] ## losing some words here because of unclean elements like "—something"

my_nltext.collocations()

my_vocabulary = sorted(set(my_words))
 
for w in my_vocabulary:
	print w

fr_dist1 = nltk.FreqDist(my_nltext)
vocabulary1 = fr_dist1.keys()

fr_dist1.plot(20, cumulative=True) ## plot the 20 most frequent words
fr_dist1.hapaxes() ## words that occur once only



nltk.FreqDist(my_words).plot(50, cumulative=True)
nltk.FreqDist([w.lower() for w in my_nltext if w.isalpha() and len(w) > 3]).plot(50, cumulative=True) 