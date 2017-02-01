BEGIN;

INSERT INTO users (user_id, username) VALUES
(1, 'GA_NYC'),
(2, 'GA');


INSERT INTO tweets (content, likes, user_id) VALUES
('What happens after you fail? Hear from startup founders tonight at our #FailForward event: http://ga.co/2ffkllF  @theNYVC', 0, 1),
('Learn how to craft & pitch your #scientificresearch from science, tech & VC professionals - 6pm tomorrow: http://ga.co/2eW1ngR  @authorea', 0, 1),
('Hack with us from 9am-6pm on Saturday at our Amazon Alexa #Hackathon! http://ga.co/2eWba6e  @alexadevs', 0, 1),
('Last week, GA''s CEO @jakeschwartz answered questions about startups, MBAs & more. Learn what he had to say: http://ga.co/2el9UJI  @Quora', 0, 1),
('Encouraging women to pursue programming careers means creating a more inclusive work culture: http://ga.co/2fnkSyY  #womenintech', 0, 2),
('Happy birthday, Carl Sagan! Nearly 40 years ago, the late astronomer sent the Voyager Golden Record into space: https://www.instagram.com/p/BMmI8tdBEbi/ ', 0, 2),
('I just want Tony Soprano 2 b', 32, 1),
('Sorry tevin we''re doingo this', 0, 2),
('New York, New York get at work today It''s the name I was given; that evokes a Retirement Facility With dogs', 10, 1),
('Jake Deter Likes Me!', 0, 2),
('SUMMER OF dollars, and develop my imagination. I''ve always been talkin shortie up', 1, 1),
('WHO is gonna study abroad?', 11, 2),
('They have jumpsuits for a whole day', 1, 1),
('It Feels OD strong 2nite...', 1, 1),
('I am a beat that evokes a witch making a potion that movie?', 22, 2),
('i poop to whoever the amy winehouse website down', 33, 1);

COMMIT;
