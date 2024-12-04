import { 
    Eye, 
    Globe, 
    Unlock, 
    Puzzle, 
    AlertTriangle, 
    BookOpen, 
    Zap, 
    Minimize, 
    MessageCircle, 
    HelpCircle 
  } from 'lucide-react';
  
  export const heuristics = [
    {
      id: 'UH#1',
      title: 'Visibility of System Status',
      description: 'Keep users informed about what is going on through appropriate feedback within reasonable time.',
      icon: Eye,
      color: 'blue',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'UH#2',
      title: 'Match Between System and the Real World',
      description: 'Speak the users\' language with words, phrases, and concepts familiar to them.',
      icon: Globe,
      color: 'green',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      id: 'UH#3',
      title: 'User Control and Freedom',
      description: 'Provide "emergency exits" for users to leave unwanted states without going through an extended process.',
      icon: Unlock,
      color: 'purple',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      id: 'UH#4',
      title: 'Consistency and Standards',
      description: 'Follow platform and industry conventions so users don\'t have to wonder about different words, situations, or actions.',
      icon: Puzzle,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    },
    {
      id: 'UH#5',
      title: 'Error Prevention',
      description: 'Eliminate error-prone conditions or check for them and present users with a confirmation option.',
      icon: AlertTriangle,
      color: 'red',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      id: 'UH#6',
      title: 'Recognition Rather Than Recall',
      description: 'Minimize the user\'s memory load by making objects, actions, and options visible.',
      icon: BookOpen,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    {
      id: 'UH#7',
      title: 'Flexibility and Efficiency of Use',
      description: 'Provide accelerators (unseen by novice users) that speed up interaction for expert users.',
      icon: Zap,
      color: 'orange',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      id: 'UH#8',
      title: 'Aesthetic and Minimalist Design',
      description: 'Avoid irrelevant or rarely needed information in dialogues.',
      icon: Minimize,
      color: 'gray',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100'
    },
    {
      id: 'UH#9',
      title: 'Help Users Recognize and Recover from Errors',
      description: 'Express error messages in plain language, precisely indicate the problem, and constructively suggest a solution.',
      icon: MessageCircle,
      color: 'rose',
      bgColor: 'bg-rose-50',
      hoverColor: 'hover:bg-rose-100'
    },
    {
      id: 'UH#10',
      title: 'Help and Documentation',
      description: 'Provide easy-to-search help and documentation that focuses on the user\'s task.',
      icon: HelpCircle,
      color: 'cyan',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100'
    }
  ];
//     export const getHeuristicById = (id) => {
//     return heuristics.find(heuristic => heuristic.id === id);
//   };