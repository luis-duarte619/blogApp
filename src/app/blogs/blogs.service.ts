import { Injectable } from '@angular/core';

import { Blog } from './blog.model'

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private _blogs: Blog[] =[
    new Blog(
      'p1',
      'What I learned this week',
      'Throughout this week I have learned so much. I basically knew none of the code. I know how to use python but I had only used it very sparingly. I had never done anything in the real world. In class I followed instructions and typed away and was able to create dictionaries, parse through them, make charts and graphs but I didn’t really understand what was going on. I was barely acquainted with the terminal. This week I learned ionic, angular, what node and express do. I learned more javascript than I previously knew and became a lot more comfortable with HTML . I started the week absolutely overwhelmed but over the course of these few days, I have really learned a lot. Back when Sergio asked me for help I was completely lost. He would share his screen and it was a completely new world. Now I could definitely help him if needed. I also learned where to find resources.',
      'https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_739534918.jpg'
    ),
    new Blog(
      'p2',
      'My Favorite Resource',
      'I found a 4  hour long youtube video by the channel Academind. The video name is Ionic 4 & Angular Tutorial For Beginners - Crash Course. It was a really good video that went through an app building example. While I did not use much of that code, I was able to learn a lot. I looked up Academind and it turns out that they had a 20 dollar course, that is 20+ hours on ionic and it had a lot of the components that we use in the app. They taught me how to user authenticate, basically they taught me everything and I moved it to my app. I followed along with them and built the app that they made- but I didn’t finish because I was skipping around a lot to find what I needed.',
      'https://miro.medium.com/max/3200/1*tB2VvVKEBF6hfbGcyLFyxQ.png'
    ),    
    new Blog(
      'p3',
      'What I Wish I Did Differently',
      'The first few days were not so productive. I was extremely overwhelmed and spent too much time learning things that I did not even implement. Some things helped like creating an angular app, but trying to make an app with node and express is something that I haven’t looked back at. I spend those first few days doing research that did not help me. I did not ask for a lot of help this past week and I did it consciously. I did not have any specific questions, what I would’ve needed is a teacher- someone who can look at what im doing and nudge me in the right direction. Something like office hours would’ve helped where I would work on the project with a partner. We kind of did that on discord but I didn’t have any questions at the time. Even though it may have taken longer I found some gold resources online.',
      'https://w0.pngwave.com/png/389/565/delta-symbol-greek-alphabet-beta-letter-greek-letter-delta-png-clip-art.png'
    ),
  ];
  get blogs() {
    return [...this._blogs];
  }
    
    constructor() { }
  
    getBlog(id: string) {
      return {...this._blogs.find(p => p.id === id)};
    }
  }
  
