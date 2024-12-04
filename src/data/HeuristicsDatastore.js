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
      color: {
        text: 'text-blue-600',
        bg: 'bg-blue-50',
        textTitle: 'text-blue-900',
        textActive: 'text-blue-800'
      }
    },
    {
      id: 'UH#2',
      title: 'Match Between System and the Real World',
      description: 'Speak the users\' language with words, phrases, and concepts familiar to them.',
      icon: Globe,
      color: {
        text: 'text-green-600',
        bg: 'bg-green-50',
        textTitle: 'text-green-900',
        textActive: 'text-green-800'
      }
    },
    {
      id: 'UH#3',
      title: 'User Control and Freedom',
      description: 'Provide "emergency exits" for users to leave unwanted states without going through an extended process.',
      icon: Unlock,
      color: {
        text: 'text-purple-600',
        bg: 'bg-purple-50',
        textTitle: 'text-purple-900',
        textActive: 'text-purple-800'
      }
    },
    {
      id: 'UH#4',
      title: 'Consistency and Standards',
      description: 'Follow platform and industry conventions so users don\'t have to wonder about different words, situations, or actions.',
      icon: Puzzle,
      color: {
        text: 'text-indigo-600',
        bg: 'bg-indigo-50',
        textTitle: 'text-indigo-900',
        textActive: 'text-indigo-800'
      }
    },
    {
      id: 'UH#5',
      title: 'Error Prevention',
      description: 'Eliminate error-prone conditions or check for them and present users with a confirmation option.',
      icon: AlertTriangle,
      color: {
        text: 'text-red-600',
        bg: 'bg-red-50',
        textTitle: 'text-red-900',
        textActive: 'text-red-800'
      }
    },
    {
      id: 'UH#6',
      title: 'Recognition Rather Than Recall',
      description: 'Minimize the user\'s memory load by making objects, actions, and options visible.',
      icon: BookOpen,
      color: {
        text: 'text-yellow-600',
        bg: 'bg-yellow-50',
        textTitle: 'text-yellow-900',
        textActive: 'text-yellow-800'
      }
    },
    {
      id: 'UH#7',
      title: 'Flexibility and Efficiency of Use',
      description: 'Provide accelerators (unseen by novice users) that speed up interaction for expert users.',
      icon: Zap,
      color: {
        text: 'text-orange-600',
        bg: 'bg-orange-50',
        textTitle: 'text-orange-900',
        textActive: 'text-orange-800'
      }
    },
    {
      id: 'UH#8',
      title: 'Aesthetic and Minimalist Design',
      description: 'Avoid irrelevant or rarely needed information in dialogues.',
      icon: Minimize,
      color: {
        text: 'text-gray-600',
        bg: 'bg-gray-50',
        textTitle: 'text-gray-900',
        textActive: 'text-gray-800'
      }
    },
    {
      id: 'UH#9',
      title: 'Help Users Recognize and Recover from Errors',
      description: 'Express error messages in plain language, precisely indicate the problem, and constructively suggest a solution.',
      icon: MessageCircle,
      color: {
        text: 'text-rose-600',
        bg: 'bg-rose-50',
        textTitle: 'text-rose-900',
        textActive: 'text-rose-800'
      }
    },
    {
      id: 'UH#10',
      title: 'Help and Documentation',
      description: 'Provide easy-to-search help and documentation that focuses on the user\'s task.',
      icon: HelpCircle,
      color: {
        text: 'text-cyan-600',
        bg: 'bg-cyan-50',
        textTitle: 'text-cyan-900',
        textActive: 'text-cyan-800'
      }
    }
  ];