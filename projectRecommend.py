import streamlit as st
import pandas as pd
import pickle

df = pickle.load(open('df.pkl','rb'))
similarity=pickle.load(open('similarity.pkl','rb'))


def recommendation(title):
    idx=df[df['Title']==title].index[0]
    idx=df.index.get_loc(idx)
    distances = sorted(list(enumerate(similarity[idx])), key=lambda x: x[1], reverse=False)[1:20]

    project=[]
    for i in distances:
      project.append(df.iloc[i[0]].Title)
    return project


# web app
st.title('Project Recommendation System')
title=st.selectbox('search project',df['Title'])

project=recommendation(title)

if project:
   st.write(project)