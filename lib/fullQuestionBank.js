const fullQuestionBank = [
  {
    id: 1,
    question: "When faced with a big decision, what’s your instinct?",
    options: {
      D: "Act immediately and confidently",
      I: "Talk it through with friends",
      S: "Take time to think and feel",
      C: "Research every detail first"
    }
  },
  {
    id: 2,
    question: "How do you usually approach a group project?",
    options: {
      D: "Take charge and delegate",
      I: "Keep everyone motivated and excited",
      S: "Support the team and avoid conflict",
      C: "Organize everything and follow structure"
    }
  },
  {
    id: 3,
    question: "What frustrates you the most?",
    options: {
      D: "Slow progress",
      I: "Boring environments",
      S: "Unstable situations",
      C: "Messy or illogical systems"
    }
  },
  {
    id: 4,
    question: "Which role do you naturally fall into?",
    options: {
      D: "Leader",
      I: "Cheerleader",
      S: "Peacemaker",
      C: "Planner"
    }
  },
  {
    id: 5,
    question: "When learning something new, you prefer:",
    options: {
      D: "Hands-on trial and error",
      I: "Interactive discussions",
      S: "Step-by-step guidance",
      C: "Reading all instructions first"
    }
  },
  {
    id: 6,
    question: "In a disagreement, you usually:",
    options: {
      D: "Stand your ground",
      I: "Charm your way out",
      S: "Keep the peace",
      C: "Present logical reasoning"
    }
  },
  {
    id: 7,
    question: "What energizes you most?",
    options: {
      D: "Achieving a goal",
      I: "Being around people",
      S: "Quality time with loved ones",
      C: "Solving a complex problem"
    }
  },
  {
    id: 8,
    question: "How do you handle change?",
    options: {
      D: "I drive it",
      I: "I adapt quickly",
      S: "I prefer stability",
      C: "I need time to analyze it"
    }
  },
  {
    id: 9,
    question: "Your ideal weekend involves:",
    options: {
      D: "Pushing your limits",
      I: "Social events",
      S: "Relaxing with close friends",
      C: "Learning or building something"
    }
  },
  {
    id: 10,
    question: "When you're misunderstood, you:",
    options: {
      D: "Clarify and press on",
      I: "Use humor to reconnect",
      S: "Stay quiet and reflect",
      C: "Review what you said for errors"
    }
  },
  {
    id: 11,
    question: "What do you value most in others?",
    options: {
      D: "Competence",
      I: "Optimism",
      S: "Loyalty",
      C: "Accuracy"
    }
  },
  {
    id: 12,
    question: "How do you handle rules?",
    options: {
      D: "Bend them if needed",
      I: "See them as flexible",
      S: "Follow them out of respect",
      C: "Follow them exactly"
    }
  },
  {
    id: 13,
    question: "What kind of praise feels best to you?",
    options: {
      D: "Being acknowledged for results",
      I: "Being liked and appreciated",
      S: "Being recognized for support",
      C: "Being valued for expertise"
    }
  },
  {
    id: 14,
    question: "In a crisis, you're most likely to:",
    options: {
      D: "Take command",
      I: "Stay upbeat and lighten the mood",
      S: "Stay calm and reassure others",
      C: "Analyze what's happening"
    }
  },
  {
    id: 15,
    question: "What motivates you to keep going?",
    options: {
      D: "A worthy challenge",
      I: "Recognition and energy",
      S: "Consistency and purpose",
      C: "Clarity and logic"
    }
  },
  {
    id: 16,
    question: "You prefer tasks that are:",
    options: {
      D: "Fast-paced and result-oriented",
      I: "Creative and expressive",
      S: "Supportive and team-based",
      C: "Detail-oriented and structured"
    }
  },
  {
    id: 17,
    question: "What causes you to disengage?",
    options: {
      D: "Too many restrictions",
      I: "Lack of fun",
      S: "Too much chaos",
      C: "Disorganization"
    }
  },
  {
    id: 18,
    question: "You're more likely to be described as:",
    options: {
      D: "Bold",
      I: "Energetic",
      S: "Calm",
      C: "Thoughtful"
    }
  },
  {
    id: 19,
    question: "When trying something new, you usually:",
    options: {
      D: "Jump in full force",
      I: "Talk about it with others first",
      S: "Wait and see how others handle it",
      C: "Research thoroughly beforehand"
    }
  },
  {
    id: 20,
    question: "You feel most fulfilled when:",
    options: {
      D: "You win",
      I: "You connect",
      S: "You help",
      C: "You understand"
    }
  },
{
  id: 21,
  question: "In conversation, you're usually:",
  options: {
    D: "Direct and brief",
    I: "Expressive and enthusiastic",
    S: "Warm and attentive",
    C: "Precise and factual"
  }
},
{
  id: 22,
  question: "When working on a team, you dislike:",
  options: {
    D: "Wasting time",
    I: "Boring routines",
    S: "Conflict or pressure",
    C: "Unclear directions"
  }
},
{
  id: 23,
  question: "You thrive when you can:",
  options: {
    D: "Make things happen",
    I: "Inspire others",
    S: "Support and steady a group",
    C: "Analyze and improve systems"
  }
},
{
  id: 24,
  question: "How do you approach new environments?",
  options: {
    D: "Own the room",
    I: "Mingle quickly",
    S: "Observe quietly",
    C: "Assess quietly"
  }
},
{
  id: 25,
  question: "If someone challenges you, you:",
  options: {
    D: "Push back strongly",
    I: "Redirect the mood",
    S: "Try to defuse",
    C: "Use facts to make your point"
  }
},
{
  id: 26,
  question: "How do you handle deadlines?",
  options: {
    D: "Crush them early",
    I: "Sprint at the end",
    S: "Pace yourself steadily",
    C: "Plan everything in advance"
  }
},
{
  id: 27,
  question: "What type of feedback do you prefer?",
  options: {
    D: "Blunt and honest",
    I: "Encouraging and friendly",
    S: "Gentle and kind",
    C: "Detailed and constructive"
  }
},
{
  id: 28,
  question: "You usually form opinions based on:",
  options: {
    D: "What works",
    I: "How it feels",
    S: "What people need",
    C: "What makes sense"
  }
},
{
  id: 29,
  question: "You deal with conflict by:",
  options: {
    D: "Confronting it",
    I: "Deflecting it",
    S: "Avoiding it",
    C: "Dissecting it"
  }
},
{
  id: 30,
  question: "In social settings, you're usually:",
  options: {
    D: "Focused and assertive",
    I: "Outgoing and chatty",
    S: "Quiet but present",
    C: "Reserved and observant"
  }
},
{
  id: 31,
  question: "What keeps you up at night?",
  options: {
    D: "Thinking about the next big move",
    I: "Excitement or overstimulation",
    S: "Worrying about others",
    C: "Overthinking details"
  }
},
{
  id: 32,
  question: "How do you prepare for big events?",
  options: {
    D: "Think strategy and attack",
    I: "Visualize it positively",
    S: "Stick to your routine",
    C: "Double-check everything"
  }
},
{
  id: 33,
  question: "When someone’s emotional, you:",
  options: {
    D: "Try to solve the issue",
    I: "Use humor to lift them",
    S: "Listen and comfort them",
    C: "Stay calm and logical"
  }
},
{
  id: 34,
  question: "You feel most powerful when:",
  options: {
    D: "You're in control",
    I: "You're inspiring",
    S: "You're making peace",
    C: "You're mastering systems"
  }
},
{
  id: 35,
  question: "Which compliment means the most to you?",
  options: {
    D: "You're unstoppable",
    I: "You brighten the room",
    S: "You're always there for us",
    C: "You're incredibly sharp"
  }
},
{
  id: 36,
  question: "When pressure hits, you:",
  options: {
    D: "Perform better",
    I: "Look for support",
    S: "Stay consistent",
    C: "Stick to process"
  }
},
{
  id: 37,
  question: "What's your decision-making style?",
  options: {
    D: "Fast and instinctual",
    I: "Creative and flexible",
    S: "Balanced and careful",
    C: "Deliberate and exact"
  }
},
{
  id: 38,
  question: "What kind of environment suits you best?",
  options: {
    D: "High-stakes, competitive",
    I: "Lively, ever-changing",
    S: "Stable, nurturing",
    C: "Organized, structured"
  }
},
{
  id: 39,
  question: "What’s your superpower?",
  options: {
    D: "Drive",
    I: "Inspiration",
    S: "Stability",
    C: "Precision"
  }
},
{
  id: 40,
  question: "What do you dislike most?",
  options: {
    D: "Inaction",
    I: "Negativity",
    S: "Disruption",
    C: "Inaccuracy"
  }
},
{
  id: 41,
  question: "How do you view rules?",
  options: {
    D: "As optional challenges",
    I: "As guidelines",
    S: "As agreements",
    C: "As boundaries to protect quality"
  }
},
{
  id: 42,
  question: "Your mindset under pressure is:",
  options: {
    D: "Attack the problem",
    I: "Stay positive",
    S: "Stay composed",
    C: "Stick to the plan"
  }
},
{
  id: 43,
  question: "Which activity sounds most appealing?",
  options: {
    D: "Launching a bold project",
    I: "Hosting a social event",
    S: "Volunteering at a local shelter",
    C: "Building a new system"
  }
},
{
  id: 44,
  question: "What’s your core fear?",
  options: {
    D: "Losing control",
    I: "Being disliked",
    S: "Losing connection",
    C: "Being wrong"
  }
},
{
  id: 45,
  question: "In your ideal team, you're the one who:",
  options: {
    D: "Drives the vision",
    I: "Boosts the morale",
    S: "Keeps the peace",
    C: "Checks the details"
  }
},
{
  id: 46,
  question: "What slows you down?",
  options: {
    D: "Over-explaining",
    I: "Bureaucracy",
    S: "Uncertainty",
    C: "Sloppy work"
  }
},
{
  id: 47,
  question: "What makes you trust someone?",
  options: {
    D: "Competence and action",
    I: "Warmth and charisma",
    S: "Reliability and kindness",
    C: "Clarity and consistency"
  }
},
{
  id: 48,
  question: "What’s your reaction to vague tasks?",
  options: {
    D: "Figure it out",
    I: "Improvise",
    S: "Ask for guidance",
    C: "Request specifics"
  }
},
{
  id: 49,
  question: "How do you view deadlines?",
  options: {
    D: "Targets to hit early",
    I: "Flexible goals",
    S: "Important to plan for",
    C: "Fixed, non-negotiable"
  }
},
{
  id: 50,
  question: "Your biggest strength is your:",
  options: {
    D: "Determination",
    I: "Influence",
    S: "Supportiveness",
    C: "Insight"
  }
},
{
  id: 51,
  question: "When meeting someone new, I usually:",
  options: {
    D: "State my goals and purpose",
    I: "Engage them with humor and friendliness",
    S: "Let them lead the conversation",
    C: "Ask detailed questions about their background"
  }
},
{
  id: 52,
  question: "My decision-making style is best described as:",
  options: {
    D: "Quick and assertive",
    I: "Flexible and people-focused",
    S: "Cautious and steady",
    C: "Thorough and data-driven"
  }
},
{
  id: 53,
  question: "How do you handle routine?",
  options: {
    D: "I tolerate it if it leads to results",
    I: "I get bored easily and crave stimulation",
    S: "I find comfort in predictability",
    C: "I appreciate the structure and order"
  }
},
{
  id: 54,
  question: "What motivates you most?",
  options: {
    D: "Winning and achieving goals",
    I: "Recognition and connection",
    S: "Stability and relationships",
    C: "Understanding and accuracy"
  }
},
{
  id: 55,
  question: "When someone interrupts your plan, you:",
  options: {
    D: "Push forward and reassert direction",
    I: "Talk it out and realign socially",
    S: "Quietly adjust without conflict",
    C: "Reassess everything to ensure it still works"
  }
},
{
  id: 56,
  question: "What’s your typical role in a group setting?",
  options: {
    D: "The one calling the shots",
    I: "The one keeping energy high",
    S: "The one ensuring everyone feels included",
    C: "The one checking for details and facts"
  }
},
{
  id: 57,
  question: "How do you respond to criticism?",
  options: {
    D: "Defend and justify my actions",
    I: "Laugh it off or redirect it",
    S: "Take it personally but try to grow",
    C: "Analyze it deeply for truth"
  }
},
{
  id: 58,
  question: "What type of environment brings out your best?",
  options: {
    D: "Fast-paced and competitive",
    I: "Creative and social",
    S: "Calm and collaborative",
    C: "Organized and structured"
  }
},
{
  id: 59,
  question: "When resolving conflict, you:",
  options: {
    D: "Take control and seek a solution",
    I: "Charm and disarm to restore peace",
    S: "Avoid escalation and mediate quietly",
    C: "Stick to facts and fairness"
  }
},
{
  id: 60,
  question: "You see a problem at work. You:",
  options: {
    D: "Fix it immediately",
    I: "Talk to others and brainstorm solutions",
    S: "Wait for the right moment to act",
    C: "Analyze root causes before acting"
  }
},
{
  id: 61,
  question: "Which description fits you best?",
  options: {
    D: "Bold and commanding",
    I: "Fun and persuasive",
    S: "Kind and considerate",
    C: "Precise and thoughtful"
  }
},
{
  id: 62,
  question: "How do you handle ambiguity?",
  options: {
    D: "Make a fast call and move",
    I: "Go with the flow",
    S: "Try to wait until clarity comes",
    C: "Get anxious and seek details"
  }
},
{
  id: 63,
  question: "What’s your natural response to deadlines?",
  options: {
    D: "Crush them with urgency",
    I: "Start late but finish big",
    S: "Pace steadily toward completion",
    C: "Plan far ahead to avoid surprises"
  }
},
{
  id: 64,
  question: "People know you for being:",
  options: {
    D: "Driven and confident",
    I: "Charismatic and warm",
    S: "Supportive and reliable",
    C: "Smart and logical"
  }
},
{
  id: 65,
  question: "How do you manage stress?",
  options: {
    D: "Power through it",
    I: "Talk it out or distract myself",
    S: "Withdraw and find peace",
    C: "Organize and create structure"
  }
},
{
  id: 66,
  question: "When you're misunderstood, you tend to:",
  options: {
    D: "Clarify immediately and assert truth",
    I: "Try to win people back over",
    S: "Let it go to avoid conflict",
    C: "Document and explain clearly"
  }
},
{
  id: 67,
  question: "How do you treat rules?",
  options: {
    D: "Bend them if needed to get results",
    I: "Ignore them if they slow me down",
    S: "Respect them for group harmony",
    C: "Follow them exactly"
  }
},
{
  id: 68,
  question: "Which scenario excites you most?",
  options: {
    D: "Leading a new team to win big",
    I: "Speaking to a huge audience",
    S: "Helping a close friend through a tough time",
    C: "Solving a complex puzzle"
  }
},
{
  id: 69,
  question: "Which behavior annoys you most?",
  options: {
    D: "Laziness or hesitation",
    I: "Negativity or disinterest",
    S: "Aggression or pressure",
    C: "Disorganization or chaos"
  }
},
{
  id: 70,
  question: "How do you approach self-growth?",
  options: {
    D: "Set big goals and chase them",
    I: "Get inspired by stories and mentors",
    S: "Focus on balance and wellbeing",
    C: "Study systems and techniques"
  }
}
{
  id: 71,
  question: "At your best, you’re:",
  options: {
    D: "Commanding",
    I: "Electric",
    S: "Grounded",
    C: "Precise"
  }
},
{
  id: 72,
  question: "At your worst, you can be:",
  options: {
    D: "Overbearing",
    I: "Scattered",
    S: "Passive",
    C: "Nitpicky"
  }
},
{
  id: 73,
  question: "In an emergency, you usually:",
  options: {
    D: "Take charge immediately",
    I: "Keep people calm with positivity",
    S: "Support and stabilize others",
    C: "Scan for facts and form a logical plan"
  }
},
{
  id: 74,
  question: "When someone thanks you, how do you respond?",
  options: {
    D: "Acknowledge and move forward",
    I: "Smile and say something witty",
    S: "Respond kindly and deflect praise",
    C: "Nod modestly and reflect on what could be better"
  }
},
{
  id: 75,
  question: "When faced with a sudden challenge, I:",
  options: {
    D: "Take immediate action without hesitation",
    I: "Rally others with optimism and energy",
    S: "Stay calm and look for support",
    C: "Analyze all details before responding"
  }
},
{
  id: 76,
  question: "In high-pressure situations, I’m more likely to:",
  options: {
    D: "Assert control",
    I: "Keep morale high",
    S: "Stay level-headed and consistent",
    C: "Stick to procedures and standards"
  }
},
{
  id: 77,
  question: "I build trust with others by:",
  options: {
    D: "Demonstrating competence and getting results",
    I: "Being outgoing and relatable",
    S: "Being loyal and dependable",
    C: "Being thorough and accurate"
  }
},
{
  id: 78,
  question: "My decision-making process typically involves:",
  options: {
    D: "Acting quickly and decisively",
    I: "Considering what others will think",
    S: "Maintaining peace and consistency",
    C: "Researching and verifying information"
  }
},
{
  id: 79,
  question: "In group work, my strength is:",
  options: {
    D: "Driving the team forward",
    I: "Energizing and motivating others",
    S: "Creating a stable environment",
    C: "Organizing and refining the plan"
  }
},
{
  id: 80,
  question: "When someone disagrees with me, I:",
  options: {
    D: "Stand firm on my position",
    I: "Try to lighten the mood",
    S: "Avoid confrontation",
    C: "Recheck the facts"
  }
},
{
  id: 81,
  question: "I value people who:",
  options: {
    D: "Take charge and make things happen",
    I: "Bring positivity and fun",
    S: "Are thoughtful and steady",
    C: "Are logical and detail-focused"
  }
},
{
  id: 82,
  question: "I find motivation in:",
  options: {
    D: "Winning and achieving goals",
    I: "Social recognition and excitement",
    S: "Supporting others and being appreciated",
    C: "Mastering knowledge and doing things right"
  }
},
{
  id: 83,
  question: "My personal relationships are built on:",
  options: {
    D: "Mutual ambition",
    I: "Shared experiences and laughter",
    S: "Trust and reliability",
    C: "Honesty and logic"
  }
},
{
  id: 84,
  question: "I prefer working environments that are:",
  options: {
    D: "Fast-paced and competitive",
    I: "Fun and flexible",
    S: "Predictable and people-centered",
    C: "Structured and analytical"
  }
},
{
  id: 85,
  question: "When working on a big task, I:",
  options: {
    D: "Want full control",
    I: "Prefer team brainstorming",
    S: "Want a clear plan and schedule",
    C: "Need thorough instructions and data"
  }
},
{
  id: 86,
  question: "If someone’s taking too long to make a decision, I:",
  options: {
    D: "Get frustrated and take over",
    I: "Distract them with a joke",
    S: "Wait patiently and offer support",
    C: "Help clarify the details"
  }
},
{
  id: 87,
  question: "In conversations, I’m more focused on:",
  options: {
    D: "Getting to the point",
    I: "Telling stories and keeping it fun",
    S: "Understanding emotions",
    C: "Making sure things are accurate"
  }
},
{
  id: 88,
  question: "I feel most confident when:",
  options: {
    D: "I’m winning or achieving something",
    I: "I’m connecting with people",
    S: "Everyone’s getting along",
    C: "I’ve done my research"
  }
},
{
  id: 89,
  question: "My communication style is:",
  options: {
    D: "Direct and assertive",
    I: "Expressive and animated",
    S: "Gentle and considerate",
    C: "Precise and formal"
  }
},
{
  id: 90,
  question: "I respond to criticism by:",
  options: {
    D: "Challenging it",
    I: "Laughing it off",
    S: "Internalizing it",
    C: "Reflecting on the facts"
  }
},
{
  id: 91,
  question: "When a deadline is near, I:",
  options: {
    D: "Thrive under pressure",
    I: "Get easily distracted",
    S: "Steadily chip away at it",
    C: "Double-check everything"
  }
},
{
  id: 92,
  question: "I prefer goals that:",
  options: {
    D: "Push my limits",
    I: "Involve people and experiences",
    S: "Offer security and consistency",
    C: "Require careful strategy"
  }
},
{
  id: 93,
  question: "When change happens, I:",
  options: {
    D: "Jump into the new challenge",
    I: "See the opportunity and get excited",
    S: "Miss the old way but adapt slowly",
    C: "Need time to understand and plan"
  }
},
{
  id: 94,
  question: "In a leadership role, I:",
  options: {
    D: "Set high expectations",
    I: "Keep morale and engagement high",
    S: "Create a safe space for the team",
    C: "Ensure policies and systems are followed"
  }
},
{
  id: 95,
  question: "When meeting new people, I:",
  options: {
    D: "Size them up quickly",
    I: "Talk and connect immediately",
    S: "Take time to warm up",
    C: "Let them speak and observe"
  }
},
{
  id: 96,
  question: "My biggest fear is:",
  options: {
    D: "Being seen as weak",
    I: "Being disliked or ignored",
    S: "Conflict or sudden change",
    C: "Making mistakes"
  }
},
{
  id: 97,
  question: "I express appreciation by:",
  options: {
    D: "Giving praise when it’s earned",
    I: "Complimenting often and warmly",
    S: "Showing consistent support",
    C: "Writing thoughtful messages"
  }
},
{
  id: 98,
  question: "I deal with uncertainty by:",
  options: {
    D: "Creating a strategy and pushing forward",
    I: "Staying positive and spontaneous",
    S: "Looking for reassurance",
    C: "Gathering as much info as possible"
  }
},
{
  id: 99,
  question: "My friends would describe me as:",
  options: {
    D: "Driven",
    I: "Charismatic",
    S: "Reliable",
    C: "Smart"
  }
},
{
  id: 100,
  question: "I lose patience when:",
  options: {
    D: "Others are indecisive",
    I: "Things get boring",
    S: "People argue",
    C: "Things are rushed"
  }
},
{
  id: 101,
  question: "I want others to see me as:",
  options: {
    D: "Capable and confident",
    I: "Fun and engaging",
    S: "Loyal and kind",
    C: "Intelligent and competent"
  }
},
{
  id: 102,
  question: "I enjoy tasks that:",
  options: {
    D: "Give me control",
    I: "Let me be expressive",
    S: "Involve helping others",
    C: "Require analysis"
  }
},
{
  id: 103,
  question: "I prepare for a big event by:",
  options: {
    D: "Planning out goals",
    I: "Practicing my presence",
    S: "Making sure everyone’s comfortable",
    C: "Reviewing all the data"
  }
},
{
  id: 104,
  question: "If I made a mistake, I:",
  options: {
    D: "Fix it and move on",
    I: "Downplay it with humor",
    S: "Feel bad and apologize",
    C: "Analyze why it happened"
  }
},
{
  id: 105,
  question: "I feel energized by:",
  options: {
    D: "A big challenge",
    I: "A group of people",
    S: "A peaceful routine",
    C: "A deep problem to solve"
  }
},
{
  id: 106,
  question: "I tend to:",
  options: {
    D: "Take charge",
    I: "Make people laugh",
    S: "Keep things peaceful",
    C: "Think before I act"
  }
},
{
  id: 107,
  question: "When things don’t go as planned, I:",
  options: {
    D: "Improvise fast",
    I: "Distract myself",
    S: "Adjust quietly",
    C: "Rethink everything"
  }
},
{
  id: 108,
  question: "I believe success is:",
  options: {
    D: "Winning and leading",
    I: "Being liked and admired",
    S: "Maintaining strong relationships",
    C: "Doing things correctly"
  }
},
{
  id: 109,
  question: "I get excited about:",
  options: {
    D: "Reaching new heights",
    I: "Meeting new people",
    S: "Being with those I care about",
    C: "Solving complex puzzles"
  }
},
{
  id: 110,
  question: "If I had a day off, I would:",
  options: {
    D: "Work on a project",
    I: "Go out with friends",
    S: "Relax at home",
    C: "Read or learn something new"
  }
},
{
  id: 111,
  question: "I learn best when:",
  options: {
    D: "It’s hands-on and fast-paced",
    I: "It’s collaborative and fun",
    S: "It’s step-by-step",
    C: "It’s detailed and logical"
  }
},
{
  id: 112,
  question: "I handle pressure by:",
  options: {
    D: "Charging forward",
    I: "Getting energized",
    S: "Keeping calm",
    C: "Thinking through every option"
  }
},
{
  id: 113,
  question: "I work best when:",
  options: {
    D: "I have freedom",
    I: "I have an audience",
    S: "I have routine",
    C: "I have clarity"
  }
},
{
  id: 114,
  question: "If I’m on a team, I:",
  options: {
    D: "Want to lead",
    I: "Want to connect",
    S: "Want to support",
    C: "Want to organize"
  }
},
{
  id: 115,
  question: "My first instinct is to:",
  options: {
    D: "Solve the problem",
    I: "Talk it out",
    S: "Keep the peace",
    C: "Look at the facts"
  }
}
{
  id: 116,
  question: "I prefer feedback that is:",
  options: {
    D: "Direct and actionable",
    I: "Encouraging and positive",
    S: "Gentle and sincere",
    C: "Detailed and specific"
  }
},
{
  id: 117,
  question: "In conflict, I:",
  options: {
    D: "Confront it",
    I: "Try to smooth it over",
    S: "Avoid it",
    C: "Analyze both sides"
  }
},
{
  id: 118,
  question: "I’m most fulfilled when:",
  options: {
    D: "I win",
    I: "I’m praised",
    S: "I help others",
    C: "I improve things"
  }
},
{
  id: 119,
  question: "I usually:",
  options: {
    D: "Go first",
    I: "Say the most",
    S: "Listen more",
    C: "Think deeper"
  }
},
{
  id: 120,
  question: "I want others to feel:",
  options: {
    D: "Inspired",
    I: "Included",
    S: "Safe",
    C: "Understood"
  }
},
{
  id: 121,
  question: "When I finish a project, I:",
  options: {
    D: "Start another",
    I: "Celebrate with others",
    S: "Make sure everyone’s happy",
    C: "Evaluate what I could do better"
  }
},
{
  id: 122,
  question: "The future makes me feel:",
  options: {
    D: "Motivated",
    I: "Excited",
    S: "Cautious",
    C: "Curious"
  }
},
{
  id: 123,
  question: "I am most confident when:",
  options: {
    D: "I’m making progress",
    I: "I’m connecting with people",
    S: "I’m in a supportive environment",
    C: "I’ve prepared thoroughly"
  }
},
{
  id: 124,
  question: "When I’m uncertain, I:",
  options: {
    D: "Trust my instincts",
    I: "Talk to others",
    S: "Wait it out",
    C: "Do research"
  }
},
{
  id: 125,
  question: "My biggest strength is:",
  options: {
    D: "Courage",
    I: "Charisma",
    S: "Compassion",
    C: "Clarity"
  }
},
{
  id: 126,
  question: "In life, I aim to:",
  options: {
    D: "Succeed",
    I: "Shine",
    S: "Serve",
    C: "Understand"
  }
},
{
  id: 127,
  question: "My focus is usually on:",
  options: {
    D: "Outcomes",
    I: "Experiences",
    S: "Relationships",
    C: "Systems"
  }
},
{
  id: 128,
  question: "I’m known for:",
  options: {
    D: "Getting things done",
    I: "Bringing joy",
    S: "Being dependable",
    C: "Thinking deeply"
  }
},
{
  id: 129,
  question: "In stressful situations, I tend to:",
  options: {
    D: "Take control",
    I: "Look for distraction",
    S: "Seek reassurance",
    C: "Retreat into thought"
  }
},
{
  id: 130,
  question: "When making plans, I like to:",
  options: {
    D: "Set bold goals",
    I: "Involve others",
    S: "Make everyone comfortable",
    C: "Ensure details are correct"
  }
},
{
  id: 131,
  question: "I usually see the world through:",
  options: {
    D: "Opportunity",
    I: "Optimism",
    S: "Empathy",
    C: "Objectivity"
  }
},
{
  id: 132,
  question: "I like my tasks to be:",
  options: {
    D: "Challenging",
    I: "Engaging",
    S: "Steady",
    C: "Clear"
  }
},
{
  id: 133,
  question: "When faced with failure, I:",
  options: {
    D: "Double down",
    I: "Stay upbeat",
    S: "Reflect calmly",
    C: "Study what went wrong"
  }
},
{
  id: 134,
  question: "In group discussions, I:",
  options: {
    D: "Lead the conversation",
    I: "Keep energy high",
    S: "Support the quiet voices",
    C: "Keep everyone on track"
  }
},
{
  id: 135,
  question: "When I feel stuck, I:",
  options: {
    D: "Force movement",
    I: "Change the energy",
    S: "Talk to someone close",
    C: "Map it out"
  }
},
{
  id: 136,
  question: "People often come to me for:",
  options: {
    D: "Decisions",
    I: "Energy",
    S: "Comfort",
    C: "Advice"
  }
},
{
  id: 137,
  question: "I feel most alive when:",
  options: {
    D: "Achieving a big goal",
    I: "Connecting with others",
    S: "Feeling calm and aligned",
    C: "Solving complex problems"
  }
},
{
  id: 138,
  question: "My go-to method of learning is:",
  options: {
    D: "Trial and error",
    I: "Interactive discussion",
    S: "Step-by-step instructions",
    C: "Reading and researching"
  }
},
{
  id: 139,
  question: "I tend to avoid:",
  options: {
    D: "Wasting time",
    I: "Being ignored",
    S: "Unrest",
    C: "Uncertainty"
  }
},
{
  id: 140,
  question: "I measure success by:",
  options: {
    D: "What I’ve accomplished",
    I: "The lives I’ve touched",
    S: "How secure I feel",
    C: "The quality of my work"
  }
},
{
  id: 141,
  question: "When people describe me, they usually say I’m:",
  options: {
    D: "Bold",
    I: "Charismatic",
    S: "Steady",
    C: "Smart"
  }
},
{
  id: 142,
  question: "My ideal role on a team is:",
  options: {
    D: "Leading",
    I: "Inspiring",
    S: "Supporting",
    C: "Optimizing"
  }
},
{
  id: 143,
  question: "My energy rises when:",
  options: {
    D: "I’m challenged",
    I: "I’m social",
    S: "I’m relaxed",
    C: "I’m thinking deeply"
  }
},
{
  id: 144,
  question: "I stay motivated by:",
  options: {
    D: "Big goals",
    I: "Praise and interaction",
    S: "Being needed",
    C: "Clear data"
  }
},
{
  id: 145,
  question: "When dealing with a problem, I:",
  options: {
    D: "Take charge immediately",
    I: "Look for creative solutions",
    S: "Keep everyone calm",
    C: "Break it into parts"
  }
},
{
  id: 146,
  question: "People rely on me for:",
  options: {
    D: "Execution",
    I: "Positivity",
    S: "Stability",
    C: "Accuracy"
  }
},
{
  id: 147,
  question: "My strength in communication is:",
  options: {
    D: "Being brief and clear",
    I: "Being expressive and likable",
    S: "Being patient and present",
    C: "Being factual and exact"
  }
},
{
  id: 148,
  question: "In a high-stakes scenario, I:",
  options: {
    D: "Step up confidently",
    I: "Keep spirits high",
    S: "Stay calm and supportive",
    C: "Ensure all facts are right"
  }
},
{
  id: 149,
  question: "I value work that allows me to:",
  options: {
    D: "Lead and innovate",
    I: "Connect and influence",
    S: "Support and serve",
    C: "Plan and perfect"
  }
},
{
  id: 150,
  question: "I recharge best by:",
  options: {
    D: "Taking on a solo challenge",
    I: "Being around fun people",
    S: "Spending quiet time with loved ones",
    C: "Being alone to think"
  }
},
{
  id: 151,
  question: "When learning something difficult, I:",
  options: {
    D: "Push through until I get it",
    I: "Seek out a fun way to learn",
    S: "Ask someone for help",
    C: "Take notes and research more"
  }
},
{
  id: 152,
  question: "At the end of a long day, I want to:",
  options: {
    D: "Plan the next win",
    I: "Unwind socially",
    S: "Be with people I trust",
    C: "Process what I’ve learned"
  }
}
];

export default fullQuestionBank;

