import { Question, Level } from '../types';

// Level definitions - organized by difficulty
// Levels 1-2: Easy, Levels 3-6: Medium, Levels 7-10: Hard
export const LEVELS: Level[] = [
  {
    number: 1,
    name: 'Getting Started',
    difficulty: 'easy',
    description: 'Warm up with the basics',
    pointsPerQuestion: 100,
    requiredPoints: 600, // Need 6 correct answers
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 2,
    name: 'Building Momentum',
    difficulty: 'easy',
    description: 'Keep the streak going',
    pointsPerQuestion: 150,
    requiredPoints: 900, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 3,
    name: 'Rising Challenge',
    difficulty: 'medium',
    description: 'Time to step it up',
    pointsPerQuestion: 200,
    requiredPoints: 1200, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 4,
    name: 'Getting Serious',
    difficulty: 'medium',
    description: 'The questions get tougher',
    pointsPerQuestion: 250,
    requiredPoints: 1500, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 5,
    name: 'Mid-Game Push',
    difficulty: 'medium',
    description: 'Halfway to glory',
    pointsPerQuestion: 300,
    requiredPoints: 1800, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 6,
    name: 'Deep Knowledge',
    difficulty: 'medium',
    description: 'Prove your expertise',
    pointsPerQuestion: 350,
    requiredPoints: 2100, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 7,
    name: 'Expert Territory',
    difficulty: 'hard',
    description: 'Only the skilled survive',
    pointsPerQuestion: 400,
    requiredPoints: 2400, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 8,
    name: 'Master Class',
    difficulty: 'hard',
    description: 'Advanced concepts ahead',
    pointsPerQuestion: 450,
    requiredPoints: 2700, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 9,
    name: 'Final Stretch',
    difficulty: 'hard',
    description: 'One level from victory',
    pointsPerQuestion: 500,
    requiredPoints: 3000, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
  {
    number: 10,
    name: 'Solace Legend',
    difficulty: 'hard',
    description: 'The ultimate challenge',
    pointsPerQuestion: 600,
    requiredPoints: 3600, // Increased by 50%
    timeLimit: 60,
    questionsCount: 5,
  },
];

// Question bank
export const QUESTIONS: Question[] = [
  // ==================== LEVEL 1: SOLACE OVERVIEW (15 questions) ====================
  {
    id: 'overview-1',
    question: 'What is Solace primarily used for?',
    options: [
      'Database management',
      'Event-driven messaging and streaming',
      'Web hosting',
      'File storage'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace is an advanced event broker that supports event-driven messaging and streaming.'
  },
  {
    id: 'overview-2',
    question: 'What messaging pattern does Solace support?',
    options: [
      'Only point-to-point',
      'Only publish-subscribe',
      'Publish-subscribe, point-to-point, and request/reply',
      'Neither'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace supports both pub/sub (topics) and point-to-point (queues) messaging patterns.'
  },
  {
    id: 'overview-3',
    question: 'What is a Message VPN in Solace?',
    options: [
      'A virtual private network for security',
      'An isolated messaging domain within a broker',
      'A backup message storage',
      'A type of encryption protocol'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'A Message VPN provides an isolated messaging domain with its own authentication, authorization, and namespace.'
  },
  {
    id: 'overview-4',
    question: 'Which of these is NOT a Solace deployment option?',
    options: [
      'Software broker',
      'Hardware appliance',
      'Cloud service (Solace Cloud)',
      'Browser plugin'
    ],
    correctAnswer: 3,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace offers software, hardware appliances, and cloud service - not browser plugins.'
  },
  {
    id: 'overview-5',
    question: 'What is the main benefit of event-driven architecture?',
    options: [
      'Tighter coupling between services',
      'Loose coupling and real-time data flow',
      'Slower data processing',
      'Reduced scalability'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Event-driven architecture enables loose coupling between services and real-time data flow.'
  },
  {
    id: 'overview-6',
    question: 'What is Solace PubSub+ Cloud?',
    options: [
      'A desktop application',
      'A fully managed event broker service',
      'A hardware appliance',
      'A database service'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace PubSub+ Cloud is a fully managed event broker service available on major cloud providers.'
  },
  {
    id: 'overview-7',
    question: 'In Solace, what role does a producer play?',
    options: [
      'Receives messages from topics',
      'Publishes messages to topics or queues',
      'Manages broker configuration',
      'Stores messages permanently'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'A producer (or publisher) sends messages to topics or queues on the broker.'
  },
  {
    id: 'overview-8',
    question: 'What is the role of a consumer in Solace messaging?',
    options: [
      'Creates topics and queues',
      'Receives and processes messages',
      'Configures the broker',
      'Monitors network traffic'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'A consumer (or subscriber) receives messages from topics or queues.'
  },
  {
    id: 'overview-9',
    question: 'What is event mesh?',
    options: [
      'A single event broker',
      'A network of interconnected event brokers',
      'A type of message format',
      'A security protocol'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'An event mesh is a network of interconnected event brokers that enables event sharing across environments.'
  },
  {
    id: 'overview-11',
    question: 'What is the primary function of an event broker?',
    options: [
      'Store data permanently',
      'Route messages between producers and consumers',
      'Generate random events',
      'Compress network traffic'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'An event broker routes messages from producers to interested consumers.'
  },
  {
    id: 'overview-12',
    question: 'Solace event broker is designed for which use case?',
    options: [
      'Only batch processing',
      'Only web applications',
      'Real-time event streaming and messaging',
      'Only mobile apps'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace is designed for real-time event streaming and messaging across various applications.'
  },
  {
    id: 'overview-13',
    question: 'What is a key advantage of using Solace over traditional messaging?',
    options: [
      'Only supports one protocol',
      'Multi-protocol support and high performance',
      'Requires manual message routing',
      'Limited scalability'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace supports multiple protocols and offers high-performance messaging.'
  },
  {
    id: 'overview-14',
    question: 'What type of applications benefit most from Solace?',
    options: [
      'Static websites',
      'Real-time, event-driven applications',
      'Offline-only applications',
      'Simple calculators'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Real-time, event-driven applications benefit most from Solace messaging capabilities.'
  },
  {
    id: 'overview-15',
    question: 'What is a best practice for designing topic hierarchies?',
    options: [
      'Use random strings',
      'Organize hierarchically from general to specific (e.g., region/country/city)',
      'Use only single-level topics',
      'Always use wildcards'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'overview',
    explanation: 'Topic hierarchies should flow from general to specific, enabling flexible subscription patterns.'
  },

  // ==================== LEVEL 2: MESSAGE DELIVERY (15 questions) ====================
  {
    id: 'delivery-1',
    question: 'What are the two main message delivery modes in Solace?',
    options: [
      'Fast and Slow',
      'Direct and Guaranteed',
      'Sync and Async',
      'Push and Pull'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'delivery',
    explanation: 'Solace supports Direct (fire-and-forget) and Guaranteed (persistent) delivery modes.'
  },
  {
    id: 'delivery-2',
    question: 'What are the two acknowledgment modes for Guaranteed messaging flows?',
    options: [
      'Sync and Async',
      'Auto-acknowledgment and Client acknowledgment',
      'Direct and Guaranteed',
      'Persistent and Non-persistent'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Solace supports Auto-acknowledgment (API automatically generates ACKs) and Client acknowledgment (application explicitly sends ACKs for each message).'
  },
  {
    id: 'delivery-3',
    question: 'What happens to a Direct message if no subscriber is available?',
    options: [
      'It is queued for later',
      'It is discarded',
      'It is sent to a dead letter queue',
      'It triggers an error'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Direct messages are discarded if no matching subscriber is connected.'
  },
  {
    id: 'delivery-4',
    question: 'Which delivery mode has lower latency?',
    options: [
      'Guaranteed messaging',
      'Direct messaging',
      'Both have the same latency',
      'It depends on message size only'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Direct messaging has lower latency because it does not persist messages.'
  },
  {
    id: 'delivery-5',
    question: 'In Guaranteed messaging, where are messages stored?',
    options: [
      'Only in client memory',
      'In broker queues or endpoints',
      'In external databases',
      'In temporary files'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Guaranteed messages are stored in broker queues/endpoints until acknowledged.'
  },
  {
    id: 'delivery-6',
    question: 'What is an acknowledgment (ACK) in Guaranteed messaging?',
    options: [
      'A message priority indicator',
      'Confirmation that a message was received',
      'A message encryption method',
      'A topic subscription'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'An ACK confirms successful receipt of a message, allowing the broker to remove it.'
  },
  {
    id: 'delivery-7',
    question: 'When should you use Direct messaging?',
    options: [
      'For critical financial transactions',
      'For high-throughput, loss-tolerant data like market ticks',
      'When messages must never be lost',
      'For audit logging'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Direct messaging is ideal for high-throughput scenarios where occasional message loss is acceptable.'
  },
  {
    id: 'delivery-8',
    question: 'What is message spooling in Solace?',
    options: [
      'Compressing messages',
      'Storing messages on disk for Guaranteed delivery',
      'Encrypting messages',
      'Routing messages to multiple topics'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Message spooling stores Guaranteed messages on disk until delivered.'
  },
  {
    id: 'delivery-9',
    question: 'Does Solace support message priority?',
    options: [
      'No, all messages are equal priority',
      'Yes, messages can have priority levels 0-255',
      'Only for Direct messages',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Solace supports message priority from 0-255, allowing higher priority messages to be delivered first.'
  },
  {
    id: 'delivery-10',
    question: 'In Guaranteed messaging, what happens if a consumer disconnects?',
    options: [
      'Messages are lost',
      'Messages remain in the queue for redelivery',
      'The broker discards the queue',
      'All publishers are notified'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Guaranteed messages remain queued until the consumer reconnects and acknowledges them.'
  },
  {
    id: 'delivery-11',
    question: 'What is the default message delivery mode for topic subscriptions?',
    options: [
      'Guaranteed delivery',
      'Direct delivery',
      'Transacted delivery',
      'No default exists'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Topic subscriptions use Direct delivery by default; queues are needed for Guaranteed messaging.'
  },
  {
    id: 'delivery-12',
    question: 'How does Solace achieve Guaranteed messaging?',
    options: [
      'By using topics only',
      'By using queues and persistent storage',
      'By sending messages multiple times',
      'By using encrypted connections'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Queues with persistent storage ensure Guaranteed message delivery.'
  },
  {
    id: 'delivery-13',
    question: 'What is publisher acknowledgment?',
    options: [
      'Consumer confirming receipt',
      'Broker confirming message was spooled',
      'Topic creation confirmation',
      'VPN setup confirmation'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Publisher acknowledgment confirms the broker has successfully stored the message.'
  },
  {
    id: 'delivery-14',
    question: 'Which delivery mode is best for IoT sensor data that arrives frequently?',
    options: [
      'Guaranteed - every reading must be saved',
      'Direct - high volume, latest data matters most',
      'Neither mode works for IoT',
      'Only batch mode'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Direct messaging handles high-volume IoT data where latest values are most important.'
  },
  {
    id: 'delivery-15',
    question: 'What happens when a Guaranteed message expires?',
    options: [
      'It is sent to all subscribers',
      'It may be moved to a Dead Message Queue',
      'It is automatically resent',
      'The broker restarts'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Expired Guaranteed messages can be moved to a Dead Message Queue (DMQ) for analysis.'
  },

  // ==================== LEVEL 3: PROTOCOLS & APIS (15 questions) ====================
  {
    id: 'protocols-1',
    question: 'Which messaging protocol is Solace\'s native high-performance protocol?',
    options: [
      'MQTT',
      'AMQP',
      'SMF (Solace Message Format)',
      'HTTP'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'SMF is Solace\'s native protocol optimized for high performance.'
  },
  {
    id: 'protocols-2',
    question: 'What is a key feature of AMQP support in Solace?',
    options: [
      'AMQP only works with queues',
      'Full protocol support including transactions and message routing',
      'AMQP is not supported',
      'AMQP requires protocol conversion'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Solace provides native AMQP 1.0 support with full protocol features including transactions.'
  },
  {
    id: 'protocols-3',
    question: 'Does Solace support the AMQP protocol?',
    options: [
      'No, only proprietary protocols',
      'Yes, including AMQP 1.0',
      'Only AMQP 0.9',
      'Only for cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Solace supports AMQP 1.0, enabling interoperability with AMQP-based systems.'
  },
  {
    id: 'protocols-4',
    question: 'Which protocol enables web browsers to connect to Solace?',
    options: [
      'SMF only',
      'WebSocket',
      'TCP only',
      'UDP only'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'WebSocket enables browser-based applications to connect to Solace.'
  },
  {
    id: 'protocols-5',
    question: 'What is a key benefit of Solace\'s multi-protocol support?',
    options: [
      'Slower performance',
      'Applications using different protocols can communicate',
      'More complex configuration',
      'Reduced security'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Multi-protocol support enables seamless communication between diverse applications.'
  },
  {
    id: 'protocols-6',
    question: 'Which API does Solace provide for Java developers?',
    options: [
      'Only JMS',
      'JCSMP and JMS',
      'Only REST',
      'No Java support'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Solace provides JCSMP (Java) and JMS APIs for Java developers.'
  },
  {
    id: 'protocols-7',
    question: 'Can REST clients send and receive messages via Solace?',
    options: [
      'No, REST is not supported',
      'Yes, via REST messaging',
      'Only for admin operations',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Solace supports REST messaging for both publishing and consuming messages.'
  },
  {
    id: 'protocols-8',
    question: 'What does JMS stand for in the context of Solace APIs?',
    options: [
      'Java Message Service',
      'JSON Message System',
      'Java Messaging Standard',
      'Just Message Sending'
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    topic: 'protocols',
    explanation: 'JMS stands for Java Message Service, a standard messaging API for Java.'
  },
  {
    id: 'protocols-9',
    question: 'Which language-specific APIs does Solace offer?',
    options: [
      'Only Java',
      'Java, C, .NET, JavaScript, Python, Go, and more',
      'Only Python',
      'Only JavaScript'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Solace provides native APIs for multiple languages including Java, C, .NET, JavaScript, Python, and Go.'
  },
  {
    id: 'protocols-10',
    question: 'What is the advantage of using SMF over other protocols?',
    options: [
      'It\'s simpler to implement',
      'Lower latency and higher throughput',
      'It works offline',
      'It requires no configuration'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'SMF is optimized for Solace brokers, providing lower latency and higher throughput.'
  },
  {
    id: 'protocols-11',
    question: 'Can an MQTT client receive messages from a JMS publisher through Solace?',
    options: [
      'No, protocols cannot interoperate',
      'Yes, Solace handles protocol translation',
      'Only with special middleware',
      'Only for Direct messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'Solace translates between protocols, enabling cross-protocol communication.'
  },
  {
    id: 'protocols-12',
    question: 'Which protocol is most suitable for resource-constrained IoT devices?',
    options: [
      'JMS',
      'AMQP 1.0',
      'MQTT',
      'SOAP'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'MQTT is lightweight and designed for resource-constrained IoT devices.'
  },
  {
    id: 'protocols-13',
    question: 'What is SEMP in Solace?',
    options: [
      'A messaging protocol',
      'Solace Element Management Protocol for administration',
      'A security encryption method',
      'A message format'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'SEMP is the management API for configuring and monitoring Solace brokers.'
  },
  {
    id: 'protocols-14',
    question: 'Which transport protocol underlies most Solace messaging protocols?',
    options: [
      'UDP only',
      'TCP',
      'FTP',
      'SMTP'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'TCP provides reliable transport for most Solace messaging protocols.'
  },

  // ==================== LEVEL 4: TOPICS & WILDCARDS (15 questions) ====================
  {
    id: 'topics-1',
    question: 'What character is used to separate levels in a Solace topic?',
    options: [
      'Dot (.)',
      'Forward slash (/)',
      'Backslash (\\)',
      'Colon (:)'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'topics',
    explanation: 'Solace topics use forward slash (/) as the level separator.'
  },
  {
    id: 'topics-2',
    question: 'What does the * wildcard match in a Solace topic subscription?',
    options: [
      'Zero or more levels',
      'Exactly one level',
      'Any number of characters in one level',
      'Nothing'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'The * wildcard matches exactly one level in a topic hierarchy.'
  },
  {
    id: 'topics-3',
    question: 'What does the > wildcard match in a Solace topic subscription?',
    options: [
      'Exactly one level',
      'One or more levels at the end of a topic',
      'Only numeric values',
      'A single character'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'The > wildcard matches one or more levels at the end of a topic. For example, a/> matches a/b and a/b/c but not just a.'
  },
  {
    id: 'topics-4',
    question: 'Which subscription would match "orders/us/new"?',
    options: [
      'orders/*/new',
      'orders/us',
      'orders/new/*',
      '*/*/old'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'orders/*/new matches any single level between orders and new.'
  },
  {
    id: 'topics-5',
    question: 'What is the maximum allowed topic length in Solace?',
    options: [
      '64 bytes',
      '250 bytes',
      '1 KB',
      '10 KB'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'The maximum topic length in Solace is 250 bytes (hard limit for SMF protocol).'
  },
  {
    id: 'topics-6',
    question: 'Can a topic name contain spaces?',
    options: [
      'Yes, spaces are allowed',
      'No, spaces are not allowed',
      'Only at the end',
      'Only if escaped'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Solace topics can contain spaces, though it\'s not recommended.'
  },
  {
    id: 'topics-7',
    question: 'What is topic dispatching?',
    options: [
      'Sending topics to subscribers',
      'Routing messages to queues based on topic subscriptions',
      'Creating new topics',
      'Deleting old topics'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Topic dispatching routes messages to queues based on topic subscriptions attached to queues.'
  },
  {
    id: 'topics-8',
    question: 'Which subscription matches "sensor/temp/room1" AND "sensor/humidity/room1"?',
    options: [
      'sensor/temp/>',
      'sensor/*/room1',
      'sensor/room1/*',
      '*/room1'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'sensor/*/room1 matches any single level between sensor and room1.'
  },
  {
    id: 'topics-9',
    question: 'What is a recommended practice for topic naming?',
    options: [
      'Use special characters and spaces freely',
      'Use lowercase, forward slashes for hierarchy, avoid wildcards in names',
      'Use wildcards in topic names',
      'Keep topics as short as possible (single word)'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Topic best practices include lowercase, hierarchical structure with slashes, and avoiding wildcard characters in actual topic names.'
  },
  {
    id: 'topics-10',
    question: 'What is a shared subscription in Solace?',
    options: [
      'Multiple clients sharing the same session',
      'Load-balanced topic subscription where one client in group receives each message',
      'Broadcasting to multiple topics',
      'Sharing queue access'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'Shared subscriptions allow multiple clients to share a subscription with load balancing across the group.'
  },
  {
    id: 'topics-11',
    question: 'What happens when multiple subscribers match the same topic?',
    options: [
      'Only one receives the message',
      'All matching subscribers receive the message',
      'An error occurs',
      'The message is duplicated in storage'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'topics',
    explanation: 'All subscribers with matching topic subscriptions receive the published message.'
  },
  {
    id: 'topics-12',
    question: 'What happens if you include > in the middle of a topic subscription?',
    options: [
      'It matches zero or more levels from that point',
      'The subscription is rejected as invalid',
      'It matches exactly one level',
      'It is treated as a literal character'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'The > wildcard must be at the end of a subscription; placing it mid-topic results in an invalid subscription.'
  },
  {
    id: 'topics-13',
    question: 'What is a topic endpoint in Solace?',
    options: [
      'The end of a topic string',
      'A durable object that attracts messages matching topic subscriptions',
      'A REST API endpoint',
      'A management interface'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'A topic endpoint is a durable object that queues messages matching its topic subscriptions.'
  },
  {
    id: 'topics-14',
    question: 'Does the subscription "a/*" match the topic "a"?',
    options: [
      'Yes',
      'No, * requires at least one level',
      'Only for Direct messages',
      'Depends on broker configuration'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'The * wildcard matches exactly one level, so a/* does not match a.'
  },
  {
    id: 'topics-15',
    question: 'What is hierarchical topic addressing useful for?',
    options: [
      'Reducing message size',
      'Organizing messages and enabling flexible subscriptions',
      'Encrypting data',
      'Compressing topics'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Hierarchical topics organize messages logically and enable wildcard subscriptions.'
  },

  // ==================== LEVEL 5: QUEUES & ENDPOINTS (15 questions) ====================
  {
    id: 'queues-1',
    question: 'What is the primary purpose of a queue in Solace?',
    options: [
      'To broadcast messages to all subscribers',
      'To store messages for guaranteed delivery',
      'To compress messages',
      'To encrypt messages'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Queues store messages persistently for guaranteed delivery to consumers.'
  },
  {
    id: 'queues-2',
    question: 'What is the difference between an exclusive and non-exclusive queue?',
    options: [
      'Exclusive queues are faster',
      'Exclusive queues allow only one consumer; non-exclusive allow multiple',
      'Non-exclusive queues are deprecated',
      'There is no difference'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Exclusive queues have one active consumer; non-exclusive queues can have multiple competing consumers.'
  },
  {
    id: 'queues-3',
    question: 'What happens when a message is acknowledged by a queue consumer?',
    options: [
      'It is sent to other consumers',
      'It is removed from the queue',
      'It is archived',
      'It is resent'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Acknowledged messages are removed from the queue as they\'ve been successfully processed.'
  },
  {
    id: 'queues-4',
    question: 'What is a Dead Message Queue (DMQ)?',
    options: [
      'A queue for deleted messages',
      'A queue for messages that couldn\'t be delivered',
      'A queue that is not active',
      'A queue with no consumers'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'A DMQ stores messages that failed delivery (expired, rejected, or exceeded retries).'
  },
  {
    id: 'queues-5',
    question: 'What is message TTL (Time To Live)?',
    options: [
      'How long a connection stays open',
      'How long a message remains in a queue before expiring',
      'How long the broker runs',
      'The message transmission time'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'TTL defines how long a message can remain in a queue before it expires.'
  },
  {
    id: 'queues-6',
    question: 'What is queue depth?',
    options: [
      'The physical size of the queue',
      'The number of messages currently in the queue',
      'The priority of the queue',
      'The number of consumers'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Queue depth is the number of messages currently stored in the queue.'
  },
  {
    id: 'queues-7',
    question: 'Can a queue have topic subscriptions in Solace?',
    options: [
      'No, queues and topics are separate',
      'Yes, queues can attract messages via topic subscriptions',
      'Only for Direct messages',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Queues can have topic subscriptions, enabling them to receive topic-published messages.'
  },
  {
    id: 'queues-8',
    question: 'What is the access type that allows multiple consumers to share queue work?',
    options: [
      'Exclusive',
      'Non-exclusive',
      'Shared',
      'Distributed'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Non-exclusive access allows multiple consumers to compete for messages.'
  },
  {
    id: 'queues-9',
    question: 'What is Negative Acknowledgment (NACK)?',
    options: [
      'Accepting a message',
      'Rejecting a message, requesting redelivery or discard',
      'Ignoring a message',
      'Forwarding a message'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'A NACK rejects a message, which may be redelivered or moved to DMQ.'
  },
  {
    id: 'queues-10',
    question: 'What is message redelivery?',
    options: [
      'Sending a message to multiple queues',
      'Resending an unacknowledged message to a consumer',
      'Copying a message',
      'Archiving a message'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Redelivery resends messages that were not acknowledged by consumers.'
  },
  {
    id: 'queues-11',
    question: 'What is the max-redelivery-count setting?',
    options: [
      'Maximum message size',
      'Maximum times a message can be redelivered before DMQ',
      'Maximum consumers',
      'Maximum queue depth'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Max-redelivery-count limits redelivery attempts before moving to DMQ.'
  },
  {
    id: 'queues-12',
    question: 'What is a durable queue?',
    options: [
      'A queue that survives broker restart',
      'A queue made of strong materials',
      'A temporary queue',
      'A queue in memory only'
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Durable queues persist their configuration and messages across broker restarts.'
  },
  {
    id: 'queues-13',
    question: 'What is the purpose of queue quotas?',
    options: [
      'To limit message content',
      'To limit queue capacity (messages or bytes)',
      'To limit consumers',
      'To limit topics'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Queue quotas limit the number of messages or bytes a queue can hold.'
  },
  {
    id: 'queues-14',
    question: 'What is a temporary queue?',
    options: [
      'A queue that persists forever',
      'A queue that exists only for the client session',
      'A queue for temporary data',
      'A queue in testing environments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Temporary queues exist only for the duration of the client session.'
  },
  {
    id: 'queues-15',
    question: 'What is the primary way to ensure message ordering in Solace?',
    options: [
      'Use multiple queues with load balancing',
      'Use an exclusive queue with a single consumer',
      'Use Direct messaging only',
      'Ordering requires special license'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Exclusive queues with a single consumer guarantee message ordering. Partitioned queues and message grouping can also maintain ordering within partitions.'
  },

  // ==================== LEVEL 6: MESSAGE REPLAY (15 questions) ====================
  {
    id: 'replay-1',
    question: 'What is Solace Message Replay?',
    options: [
      'Playing voice messages',
      'Re-delivering previously sent messages from a replay log',
      'Recording video streams',
      'Duplicating messages in real-time'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'replay',
    explanation: 'Message Replay allows re-delivery of historical messages from a persistent log.'
  },
  {
    id: 'replay-2',
    question: 'What must be enabled to use Message Replay?',
    options: [
      'Only guaranteed messaging',
      'Replay log on the queue or topic endpoint',
      'Only Direct messaging',
      'External storage'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'A replay log must be enabled on queues/endpoints to capture and replay messages.'
  },
  {
    id: 'replay-3',
    question: 'What types of messages can be replayed?',
    options: [
      'Only Direct messages',
      'Only Guaranteed messages that were logged',
      'All messages automatically',
      'Only encrypted messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Only Guaranteed messages captured in replay logs can be replayed.'
  },
  {
    id: 'replay-4',
    question: 'How can you start a replay in Solace?',
    options: [
      'Only through SEMP commands',
      'By message ID, timestamp, or "beginning"',
      'Only through code',
      'Replay starts automatically'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay can start from a specific message ID, timestamp, or the log beginning.'
  },
  {
    id: 'replay-5',
    question: 'What is the replay log trimming?',
    options: [
      'Formatting log files',
      'Removing old messages based on size or time limits',
      'Encrypting the log',
      'Compressing the log'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Trimming removes old messages from replay logs based on configured limits.'
  },
  {
    id: 'replay-6',
    question: 'Can multiple consumers replay from the same log simultaneously?',
    options: [
      'No, only one consumer at a time',
      'Yes, each consumer can have independent replay position',
      'Only with special license',
      'Only for Direct messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Multiple consumers can independently replay from the same log.'
  },
  {
    id: 'replay-7',
    question: 'What determines replay log size?',
    options: [
      'Number of consumers',
      'Maximum memory/disk and time-based limits',
      'Message priority',
      'Queue depth'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay log size is configured with max memory/disk space and time-based retention limits.'
  },
  {
    id: 'replay-8',
    question: 'What is a use case for Message Replay?',
    options: [
      'Reducing broker memory',
      'Recovering from consumer failures or onboarding new consumers',
      'Speeding up message delivery',
      'Compressing messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay helps recover from failures or catch up new consumers with historical data.'
  },
  {
    id: 'replay-9',
    question: 'Where are replay logs stored?',
    options: [
      'Only in RAM',
      'On persistent storage (disk)',
      'In the cloud only',
      'On client devices'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay logs are stored on persistent storage for durability.'
  },
  {
    id: 'replay-10',
    question: 'What is the difference between replay and redelivery?',
    options: [
      'They are the same thing',
      'Replay is from logs; redelivery is for unacknowledged messages',
      'Redelivery is faster',
      'Replay is only for topics'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'replay',
    explanation: 'Replay fetches from historical logs; redelivery resends unacknowledged messages.'
  },
  {
    id: 'replay-11',
    question: 'Can you replay messages based on a date/time range?',
    options: [
      'No, only from the beginning',
      'Yes, using timestamp-based replay',
      'Only for the last hour',
      'Only with external tools'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Timestamp-based replay allows selecting messages from specific time periods.'
  },
  {
    id: 'replay-12',
    question: 'What happens when the replay log is full?',
    options: [
      'The broker crashes',
      'Oldest messages are trimmed to make space',
      'All messages are deleted',
      'Replay is disabled'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'When full, oldest messages are trimmed based on FIFO policy.'
  },
  {
    id: 'replay-13',
    question: 'Is replay available for Direct messages?',
    options: [
      'Yes, all messages are replayed',
      'No, only Guaranteed messages in replay logs',
      'Only if configured',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay only works for Guaranteed messages captured in replay logs.'
  },
  {
    id: 'replay-14',
    question: 'What is the replay log capacity typically limited by?',
    options: [
      'Number of consumers',
      'Disk space and configured limits',
      'Network bandwidth',
      'CPU speed'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay log capacity depends on available disk space and configured limits.'
  },
  {
    id: 'replay-15',
    question: 'Can you cancel an ongoing replay?',
    options: [
      'No, it must complete',
      'Yes, replay can be cancelled at any time',
      'Only by restarting the broker',
      'Only by disconnecting the client'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replays can be cancelled before completion if needed.'
  },

  // ==================== LEVEL 7: VPN BRIDGES (15 questions) ====================
  {
    id: 'bridges-1',
    question: 'What is a Message VPN Bridge in Solace?',
    options: [
      'A security tunnel',
      'A connection that moves messages between Message VPNs',
      'A backup VPN',
      'A virtual network interface'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'A VPN bridge moves messages between Message VPNs on same or different brokers.'
  },
  {
    id: 'bridges-2',
    question: 'What is the direction of message flow in a VPN bridge?',
    options: [
      'Always bidirectional',
      'Unidirectional from local to remote',
      'Random',
      'Depends on message size'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'VPN bridges are unidirectional; bidirectional flow requires two bridges.'
  },
  {
    id: 'bridges-3',
    question: 'What is needed for Guaranteed messages to flow over a bridge?',
    options: [
      'No special configuration',
      'A queue subscription on the bridge',
      'Direct messaging enabled',
      'TLS encryption'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'bridges',
    explanation: 'Bridges need queue subscriptions to forward Guaranteed messages.'
  },
  {
    id: 'bridges-4',
    question: 'Can bridges connect VPNs on the same broker?',
    options: [
      'No, only different brokers',
      'Yes, bridges can connect VPNs on the same broker',
      'Only in cloud',
      'Only for Direct messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Bridges can connect Message VPNs on the same or different brokers.'
  },
  {
    id: 'bridges-5',
    question: 'What happens if the remote broker in a bridge is unavailable?',
    options: [
      'Messages are lost immediately',
      'Messages are queued locally until connection restores',
      'The local broker crashes',
      'All bridges stop'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Guaranteed messages queue locally and forward when the bridge reconnects.'
  },
  {
    id: 'bridges-6',
    question: 'What authentication methods can bridges use?',
    options: [
      'Only anonymous',
      'Basic auth, client certificate, or OAuth',
      'Only biometric',
      'No authentication possible'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'bridges',
    explanation: 'Bridges support various authentication methods including basic auth and certificates.'
  },
  {
    id: 'bridges-7',
    question: 'What is bridge throughput?',
    options: [
      'The number of bridges configured',
      'The rate of messages flowing across the bridge',
      'The bridge creation time',
      'The bridge storage capacity'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Bridge throughput measures the message rate flowing across the bridge connection.'
  },
  {
    id: 'bridges-8',
    question: 'Can bridges use TLS encryption?',
    options: [
      'No, bridges are internal only',
      'Yes, TLS can secure bridge connections',
      'Only for cloud bridges',
      'Only for Guaranteed messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'TLS encryption can secure bridge connections between brokers.'
  },
  {
    id: 'bridges-10',
    question: 'How are topic subscriptions applied to bridges?',
    options: [
      'All topics are bridged automatically',
      'Specific topic subscriptions filter what messages are bridged',
      'Topics cannot be used with bridges',
      'Only wildcard topics work'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'bridges',
    explanation: 'Topic subscriptions on bridges filter which messages flow to the remote VPN.'
  },
  {
    id: 'bridges-11',
    question: 'What is a bridge\'s remote message VPN?',
    options: [
      'The backup VPN',
      'The destination VPN where messages are delivered',
      'A VPN for remote users',
      'A temporary VPN'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'The remote message VPN is the destination where bridged messages are delivered.'
  },
  {
    id: 'bridges-12',
    question: 'Can you have multiple bridges from one VPN?',
    options: [
      'No, only one bridge per VPN',
      'Yes, multiple bridges to different destinations',
      'Only two bridges',
      'Only in enterprise edition'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'A VPN can have multiple bridges connecting to different remote VPNs.'
  },
  {
    id: 'bridges-13',
    question: 'What is bridge connection retry?',
    options: [
      'Manual reconnection',
      'Automatic attempts to reconnect after connection failure',
      'Bridge deletion',
      'Password reset'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Connection retry automatically attempts reconnection when a bridge fails.'
  },
  {
    id: 'bridges-14',
    question: 'How does a bridge handle message ordering?',
    options: [
      'Messages are randomized',
      'Order is preserved within a single bridge',
      'Order is always lost',
      'Order depends on message size'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'bridges',
    explanation: 'Message ordering is preserved within a single bridge connection.'
  },
  {
    id: 'bridges-15',
    question: 'What is the purpose of bridging between cloud and on-premise?',
    options: [
      'Just for testing',
      'Hybrid deployment enabling event flow between environments',
      'Reducing costs',
      'Improving security only'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Bridges enable hybrid deployments connecting cloud and on-premise systems.'
  },

  // ==================== LEVEL 8: DMR (15 questions) ====================
  {
    id: 'dmr-1',
    question: 'What is required to form a DMR cluster?',
    options: [
      'Only one broker',
      'Multiple brokers with DMR enabled and cluster links configured',
      'Special cloud license',
      'External load balancer'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR clusters require multiple brokers with DMR feature enabled and links configured between them.'
  },
  {
    id: 'dmr-2',
    question: 'What is the main purpose of DMR?',
    options: [
      'Message compression',
      'Creating a dynamic event mesh across brokers',
      'Message encryption',
      'Database replication'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR dynamically routes messages across connected brokers forming an event mesh.'
  },
  {
    id: 'dmr-3',
    question: 'How does DMR differ from VPN bridges?',
    options: [
      'DMR is manual, bridges are automatic',
      'DMR automatically discovers and routes based on subscriptions',
      'They are the same',
      'DMR only works in cloud'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'DMR dynamically discovers subscriptions and routes automatically, unlike manual bridges.'
  },
  {
    id: 'dmr-4',
    question: 'What is a DMR cluster?',
    options: [
      'A single broker',
      'A group of interconnected brokers using DMR',
      'A backup system',
      'A monitoring tool'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'A DMR cluster is a group of brokers connected via DMR links.'
  },
  {
    id: 'dmr-5',
    question: 'What type of topology does DMR support?',
    options: [
      'Only star topology',
      'Various topologies including mesh and hierarchy',
      'Only ring topology',
      'No topology support'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR supports flexible topologies including full mesh, partial mesh, and hierarchical.'
  },
  {
    id: 'dmr-6',
    question: 'How does DMR know where to route messages?',
    options: [
      'Manual configuration only',
      'By propagating subscription information between brokers',
      'Random routing',
      'Based on message size'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'DMR propagates subscription information to enable intelligent routing.'
  },
  {
    id: 'dmr-7',
    question: 'What is the DMR internal link?',
    options: [
      'A hardware cable',
      'A logical connection between brokers in a DMR cluster',
      'A security policy',
      'A message type'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'Internal links connect brokers within a DMR cluster.'
  },
  {
    id: 'dmr-8',
    question: 'Can DMR connect brokers across different data centers?',
    options: [
      'No, only within one data center',
      'Yes, using external links',
      'Only with VPN bridges',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'External links enable DMR across data centers or cloud regions.'
  },
  {
    id: 'dmr-9',
    question: 'What is subscription aggregation in DMR?',
    options: [
      'Combining subscriptions from multiple consumers into efficient routing',
      'Counting subscriptions',
      'Removing subscriptions',
      'Encrypting subscriptions'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'DMR aggregates subscriptions to optimize routing across the mesh.'
  },
  {
    id: 'dmr-10',
    question: 'What happens to messages in DMR if no subscriber exists?',
    options: [
      'Messages are stored forever',
      'Direct messages are not forwarded to brokers without subscribers',
      'Messages are duplicated',
      'All brokers receive all messages'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'DMR only routes messages to brokers with matching subscriptions.'
  },
  {
    id: 'dmr-12',
    question: 'How is DMR cluster membership managed?',
    options: [
      'Automatically discovered',
      'Configured on each broker with cluster name',
      'Through DNS',
      'Via external service'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'Brokers are configured with cluster name and link settings.'
  },
  {
    id: 'dmr-13',
    question: 'What is the benefit of DMR for global applications?',
    options: [
      'Slower message delivery',
      'Seamless event sharing across geographies',
      'Reduced reliability',
      'Limited scalability'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR enables seamless event sharing across global broker deployments.'
  },
  {
    id: 'dmr-14',
    question: 'Does DMR support both Direct and Guaranteed messages?',
    options: [
      'Only Direct messages',
      'Yes, both Direct and Guaranteed',
      'Only Guaranteed messages',
      'Neither'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR supports routing both Direct and Guaranteed messages across the mesh.'
  },
  {
    id: 'dmr-15',
    question: 'What is loop prevention in DMR?',
    options: [
      'Preventing circular references in code',
      'Preventing messages from routing in circles across brokers',
      'Preventing connection loops',
      'Preventing subscription loops'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'Loop prevention ensures messages don\'t endlessly circulate in the mesh.'
  },

  // ==================== LEVEL 9: HIGH AVAILABILITY (15 questions) ====================
  {
    id: 'ha-2',
    question: 'What is an HA pair in Solace?',
    options: [
      'Two users',
      'Active and standby broker pair',
      'Two Message VPNs',
      'Two topics'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'An HA pair consists of an active broker and a standby broker for failover.'
  },
  {
    id: 'ha-3',
    question: 'What triggers automatic failover in Solace HA?',
    options: [
      'Manual command only',
      'Active broker failure detected by standby',
      'Scheduled maintenance',
      'High message volume'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Automatic failover occurs when the standby detects active broker failure.'
  },
  {
    id: 'ha-4',
    question: 'What is the role of the monitoring node in HA?',
    options: [
      'Processing messages',
      'Arbitrating split-brain scenarios',
      'Storing messages',
      'Load balancing'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'ha',
    explanation: 'The monitoring node helps prevent split-brain by providing a third vote.'
  },
  {
    id: 'ha-5',
    question: 'What data is synchronized between active and standby brokers?',
    options: [
      'Only configuration',
      'Configuration and persisted messages',
      'Nothing',
      'Only Direct messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Both configuration and persisted Guaranteed messages are synchronized.'
  },
  {
    id: 'ha-6',
    question: 'What is "split brain" in HA?',
    options: [
      'A performance optimization',
      'When both brokers think they are active',
      'Normal failover',
      'A monitoring feature'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'ha',
    explanation: 'Split brain occurs when both brokers believe they are the active node.'
  },
  {
    id: 'ha-7',
    question: 'How do clients reconnect after failover?',
    options: [
      'Manual reconnection required',
      'Automatic reconnection to the new active broker',
      'Clients must restart',
      'No reconnection possible'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Clients automatically reconnect to the new active broker after failover.'
  },
  {
    id: 'ha-8',
    question: 'What is the purpose of heartbeat messages in HA?',
    options: [
      'Sending user data',
      'Monitoring health between active and standby',
      'Compressing messages',
      'Encrypting data'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Heartbeats allow brokers to monitor each other\'s health.'
  },
  {
    id: 'ha-9',
    question: 'What happens to in-flight Direct messages during failover?',
    options: [
      'They are preserved',
      'They may be lost',
      'They are duplicated',
      'They are archived'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'ha',
    explanation: 'Direct messages may be lost during failover as they are not persisted.'
  },
  {
    id: 'ha-10',
    question: 'Can HA be configured with different broker types?',
    options: [
      'Yes, any mix works',
      'No, HA pairs must be the same type and version',
      'Only in cloud',
      'Only for testing'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'HA pairs must be the same broker type and software version.'
  },
  {
    id: 'ha-12',
    question: 'What is the typical failover time in Solace HA?',
    options: [
      'Minutes',
      'Seconds',
      'Hours',
      'Days'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Failover typically completes within seconds.'
  },
  {
    id: 'ha-13',
    question: 'What is redundancy mode in Solace?',
    options: [
      'A backup mode',
      'Configuration for how HA pair behaves',
      'A testing mode',
      'A security setting'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Redundancy mode configures how the HA pair operates and fails over.'
  },
  {
    id: 'ha-14',
    question: 'Can you manually trigger failover?',
    options: [
      'No, only automatic',
      'Yes, for planned maintenance',
      'Only in emergencies',
      'Only through CLI'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Manual failover can be triggered for planned maintenance activities.'
  },

  // ==================== LEVEL 10: DISASTER RECOVERY (15 questions) ====================
  {
    id: 'dr-1',
    question: 'What is Disaster Recovery (DR) in the context of Solace?',
    options: [
      'Backing up configuration files',
      'Replicating data to a remote site for catastrophic failure recovery',
      'Restarting brokers',
      'Message compression'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'dr',
    explanation: 'DR involves replicating data to remote sites for recovery from major disasters.'
  },
  {
    id: 'dr-2',
    question: 'What is the difference between HA and DR?',
    options: [
      'They are the same',
      'HA is local redundancy; DR is remote site replication',
      'DR is faster than HA',
      'HA requires more hardware'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'HA provides local failover; DR provides recovery from site-wide disasters.'
  },
  {
    id: 'dr-3',
    question: 'What is replication in Solace DR?',
    options: [
      'Copying files manually',
      'Synchronizing messages and config to a remote site',
      'Duplicating brokers locally',
      'Creating topic copies'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'Replication synchronizes data to a remote site for disaster recovery.'
  },
  {
    id: 'dr-4',
    question: 'What is an active-standby DR configuration?',
    options: [
      'Both sites process messages',
      'Primary site is active; DR site is standby until needed',
      'Both sites are standby',
      'No DR configuration'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'In active-standby DR, the DR site waits in standby mode until failover.'
  },
  {
    id: 'dr-5',
    question: 'What is RPO (Recovery Point Objective)?',
    options: [
      'Recovery speed',
      'Maximum acceptable data loss measured in time',
      'Number of recovery points',
      'Processing objective'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'RPO defines how much data loss is acceptable, measured in time.'
  },
  {
    id: 'dr-6',
    question: 'What is RTO (Recovery Time Objective)?',
    options: [
      'Data loss limit',
      'Maximum acceptable downtime during recovery',
      'Replication time',
      'Timeout setting'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'RTO defines maximum acceptable downtime to restore service.'
  },
  {
    id: 'dr-7',
    question: 'What types of replication does Solace support?',
    options: [
      'Only synchronous',
      'Synchronous and asynchronous',
      'Only asynchronous',
      'No replication support'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'Solace supports both synchronous (zero RPO) and asynchronous replication.'
  },
  {
    id: 'dr-8',
    question: 'What is synchronous replication?',
    options: [
      'Replication happens eventually',
      'Message is confirmed only after replicated to DR site',
      'Replication happens once per day',
      'Manual replication'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'Synchronous replication waits for DR confirmation before acknowledging.'
  },
  {
    id: 'dr-9',
    question: 'What is the tradeoff of synchronous vs asynchronous replication?',
    options: [
      'No tradeoff',
      'Synchronous has higher latency but zero data loss',
      'Asynchronous is more reliable',
      'Synchronous is always faster'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'Synchronous replication adds latency but guarantees zero data loss.'
  },
  {
    id: 'dr-10',
    question: 'What is a DR failover?',
    options: [
      'Routine maintenance',
      'Switching operations to the DR site after primary failure',
      'Testing the DR site',
      'Backing up data'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'DR failover activates the DR site when the primary site fails.'
  },
  {
    id: 'dr-11',
    question: 'What is failback in DR?',
    options: [
      'Failing again',
      'Returning operations to the primary site after recovery',
      'Backing up to multiple sites',
      'A failure condition'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'Failback returns operations to the primary site once it\'s recovered.'
  },
  {
    id: 'dr-12',
    question: 'Can DR be combined with HA in Solace?',
    options: [
      'No, choose one or the other',
      'Yes, HA at each site plus DR between sites',
      'Only in cloud',
      'Only with hardware appliances'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'HA can be configured at each site, with DR replicating between sites.'
  },
  {
    id: 'dr-14',
    question: 'What happens to client connections during DR failover?',
    options: [
      'They continue uninterrupted',
      'Clients must reconnect to the DR site',
      'Connections are automatically migrated',
      'All clients are permanently disconnected'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'Clients must reconnect to the DR site, typically via DNS or load balancer.'
  },
  {
    id: 'dr-15',
    question: 'What is the purpose of DR testing?',
    options: [
      'To break the system',
      'To validate recovery procedures before an actual disaster',
      'To slow down replication',
      'To increase costs'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'DR testing validates that recovery procedures work before an actual disaster.'
  },

  // ==================== ADDITIONAL QUESTIONS FOR MORE VARIETY ====================

  // More Overview Questions
  {
    id: 'overview-16',
    question: 'What is the benefit of using an event broker like Solace?',
    options: [
      'Direct database access',
      'Decoupling producers and consumers',
      'Faster CPU processing',
      'Reduced disk storage'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Event brokers decouple producers and consumers, allowing them to operate independently.'
  },
  {
    id: 'overview-17',
    question: 'What does "fan-out" mean in messaging?',
    options: [
      'Sending a message to a single consumer',
      'Distributing a message to multiple consumers simultaneously',
      'Compressing messages',
      'Encrypting messages'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Fan-out distributes messages to multiple consumers at once, common in pub/sub.'
  },
  {
    id: 'overview-18',
    question: 'What is a subscription in Solace?',
    options: [
      'A payment plan',
      'A declaration of interest in receiving messages on certain topics',
      'A type of network connection',
      'A security certificate'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Subscriptions tell the broker which messages a consumer wants to receive.'
  },
  {
    id: 'overview-19',
    question: 'What is the difference between a topic and a queue in messaging?',
    options: [
      'Topics are faster than queues',
      'Topics broadcast to all subscribers; queues deliver to one consumer',
      'Queues are only for cloud deployments',
      'There is no difference'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Topics enable pub/sub (one-to-many), while queues enable point-to-point (one-to-one) messaging.'
  },
  {
    id: 'overview-20',
    question: 'What is the purpose of a Message VPN in Solace?',
    options: [
      'Encrypt network traffic',
      'Provide logical separation of messaging resources',
      'Speed up message delivery',
      'Compress messages'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Message VPNs provide multi-tenancy by logically separating messaging resources.'
  },
  {
    id: 'overview-21',
    question: 'What type of architecture does Solace support for cloud deployments?',
    options: [
      'Only on-premises',
      'Only single cloud',
      'Hybrid and multi-cloud',
      'Only private cloud'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace supports hybrid and multi-cloud architectures for flexible deployments.'
  },
  {
    id: 'overview-22',
    question: 'What is the main benefit of asynchronous messaging?',
    options: [
      'Guaranteed immediate response',
      'Decoupling of sender and receiver timing',
      'Lower memory usage',
      'Faster encryption'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Async messaging decouples applications so they don\'t need to be available simultaneously.'
  },
  {
    id: 'overview-23',
    question: 'What does "real-time" mean in the context of event-driven systems?',
    options: [
      'Processing happens at a fixed schedule',
      'Events are processed as soon as they occur with minimal delay',
      'All processing happens at midnight',
      'Events are batched weekly'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Real-time means events are processed immediately as they occur, enabling instant reactions.'
  },
  {
    id: 'overview-24',
    question: 'Why would you choose Solace over simple HTTP APIs for communication?',
    options: [
      'HTTP is always faster',
      'Solace enables async, decoupled communication with persistence and reliability',
      'HTTP cannot transfer data',
      'Solace is always free'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Solace provides async messaging, persistence, and reliability that simple HTTP lacks.'
  },
  {
    id: 'overview-25',
    question: 'What is the Solace Event Portal used for?',
    options: [
      'Monitoring server hardware',
      'Designing, documenting, and discovering events and applications',
      'Compressing message payloads',
      'Encrypting data at rest'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'overview',
    explanation: 'Event Portal provides event design, documentation, discovery, and governance capabilities.'
  },

  // More Delivery Questions
  {
    id: 'delivery-16',
    question: 'What is the ingress flow in Solace?',
    options: [
      'Messages going out from the broker',
      'Messages coming into the broker from publishers',
      'Internal broker processing',
      'Management API calls'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'delivery',
    explanation: 'Ingress is the inbound flow of messages from publishers into the broker.'
  },
  {
    id: 'delivery-17',
    question: 'What is the difference between transacted and non-transacted sessions?',
    options: [
      'Transacted sessions are faster',
      'Transacted sessions group operations for atomic commit/rollback',
      'Non-transacted sessions use more memory',
      'There is no difference'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'delivery',
    explanation: 'Transacted sessions allow grouping multiple operations for atomic commit or rollback.'
  },
  {
    id: 'delivery-18',
    question: 'What happens when a queue reaches its maximum spool usage?',
    options: [
      'New messages are automatically compressed',
      'The broker restarts',
      'New messages may be rejected based on reject policy',
      'Messages are encrypted'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'When spool is full, reject policy determines whether new messages are rejected.'
  },
  {
    id: 'delivery-19',
    question: 'What is the purpose of message eliding?',
    options: [
      'Compress large messages',
      'Drop outdated messages when newer ones arrive for same topic',
      'Encrypt sensitive data',
      'Route messages to backup queues'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'delivery',
    explanation: 'Eliding discards outdated messages when fresher data arrives, useful for market data.'
  },
  {
    id: 'delivery-20',
    question: 'What is a Solace flow?',
    options: [
      'Network traffic path',
      'A session binding to a topic endpoint or queue for consuming messages',
      'Message routing diagram',
      'Performance monitoring tool'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'A flow is a binding that allows a client to consume messages from a queue or topic endpoint.'
  },
  {
    id: 'delivery-21',
    question: 'What is the purpose of the redelivery flag on a message?',
    options: [
      'To indicate message priority',
      'To indicate the message has been delivered before but not acknowledged',
      'To compress the message',
      'To encrypt the message'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'The redelivery flag indicates a message was previously delivered but not acknowledged.'
  },
  {
    id: 'delivery-22',
    question: 'What does "at-most-once" delivery guarantee mean?',
    options: [
      'Message is delivered exactly once',
      'Message may be lost but never duplicated',
      'Message is delivered multiple times',
      'Message is always delivered'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'At-most-once means messages may be lost but will never be delivered more than once.'
  },
  {
    id: 'delivery-23',
    question: 'What is the purpose of consumer acknowledgment modes?',
    options: [
      'To speed up delivery',
      'To control when messages are removed from the queue',
      'To compress messages',
      'To encrypt acknowledgments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Ack modes control when the broker considers a message successfully delivered and removes it.'
  },
  {
    id: 'delivery-24',
    question: 'What is windowed acknowledgment?',
    options: [
      'Acknowledging messages through a GUI',
      'Acknowledging multiple messages in batches for efficiency',
      'Acknowledging to a window service',
      'Visual confirmation of delivery'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'delivery',
    explanation: 'Windowed acks batch multiple acknowledgments together for improved throughput.'
  },
  {
    id: 'delivery-25',
    question: 'What is the egress flow in Solace?',
    options: [
      'Messages going into the broker',
      'Messages going out from the broker to consumers',
      'Internal broker processing',
      'Management traffic'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'delivery',
    explanation: 'Egress is the outbound flow of messages from the broker to consuming clients.'
  },
  {
    id: 'delivery-26',
    question: 'How is message TTL (Time To Live) configured?',
    options: [
      'Only at broker level',
      'Per-message, per-queue, or globally on broker',
      'Only by the consuming client',
      'TTL cannot be configured'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'delivery',
    explanation: 'TTL can be set on individual messages, configured on queues, or set globally at the broker level.'
  },
  {
    id: 'delivery-27',
    question: 'What is backpressure in messaging systems?',
    options: [
      'Network latency',
      'A mechanism to slow producers when consumers cannot keep up',
      'Data compression',
      'Message encryption'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'delivery',
    explanation: 'Backpressure prevents overwhelming slow consumers by slowing down producers.'
  },

  // More Protocol Questions
  {
    id: 'protocols-16',
    question: 'What is the advantage of using WebSocket for messaging?',
    options: [
      'Higher latency',
      'Works through firewalls and enables browser-based messaging',
      'Requires special hardware',
      'Only works on localhost'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'WebSocket enables real-time messaging through HTTP ports, ideal for web applications.'
  },
  {
    id: 'protocols-17',
    question: 'Which protocol is commonly used for IoT devices with Solace?',
    options: ['SOAP', 'MQTT', 'FTP', 'SMTP'],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'protocols',
    explanation: 'MQTT is lightweight and ideal for IoT devices with limited bandwidth and power.'
  },
  {
    id: 'protocols-18',
    question: 'What is the Solace REST Messaging API used for?',
    options: [
      'Database queries',
      'Publishing and subscribing to messages using HTTP',
      'File transfers',
      'Video streaming'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'protocols',
    explanation: 'REST Messaging allows HTTP-based applications to participate in messaging.'
  },
  {
    id: 'protocols-19',
    question: 'What is QoS 2 in MQTT?',
    options: [
      'Fire and forget',
      'At least once delivery',
      'Exactly once delivery',
      'Best effort delivery'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'MQTT QoS 2 guarantees exactly-once message delivery through a 4-way handshake.'
  },
  {
    id: 'protocols-20',
    question: 'What AMQP feature maps to Solace queues?',
    options: [
      'Exchanges',
      'AMQP queues',
      'Virtual hosts',
      'Channels'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'AMQP queues map directly to Solace queue endpoints for consuming messages.'
  },
  {
    id: 'protocols-21',
    question: 'What is the benefit of protocol translation in Solace?',
    options: [
      'Faster message compression',
      'Applications using different protocols can communicate via the broker',
      'Lower network latency',
      'Reduced storage requirements'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'protocols',
    explanation: 'Protocol translation allows MQTT, AMQP, REST, and other apps to exchange messages.'
  },
  {
    id: 'protocols-22',
    question: 'What port does MQTT over TLS typically use with Solace?',
    options: ['1883', '8883', '443', '80'],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'MQTT over TLS uses port 8883 by default for secure connections.'
  },
  {
    id: 'protocols-23',
    question: 'What is the JMS Session in Solace JMS API?',
    options: [
      'A database connection',
      'A single-threaded context for producing and consuming messages',
      'A network socket',
      'A file handle'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'JMS Session provides a single-threaded context for message operations.'
  },
  {
    id: 'protocols-24',
    question: 'What is the difference between SEMP v1 and SEMP v2?',
    options: [
      'v1 is faster than v2',
      'v2 uses REST/JSON while v1 uses SOAP/XML',
      'They are identical',
      'v1 is for cloud only'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'SEMP v2 uses modern REST/JSON APIs while v1 uses legacy SOAP/XML format.'
  },
  {
    id: 'protocols-25',
    question: 'Which Solace API provides the highest performance?',
    options: ['REST API', 'JMS', 'Native SMF API', 'MQTT'],
    correctAnswer: 2,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'The native SMF (Solace Message Format) API offers the highest performance and features.'
  },
  {
    id: 'protocols-26',
    question: 'What is the default port for Solace SMF (Solace Message Format)?',
    options: ['55555', '8080', '443', '1883'],
    correctAnswer: 0,
    difficulty: 'medium',
    topic: 'protocols',
    explanation: 'SMF uses port 55555 by default for client connections.'
  },

  // More Topics Questions
  {
    id: 'topics-16',
    question: 'What is the maximum recommended topic level depth in Solace?',
    options: ['5 levels', '10 levels', '128 levels', 'Unlimited'],
    correctAnswer: 2,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'Solace supports up to 128 topic levels, though practical limits depend on use case.'
  },
  {
    id: 'topics-17',
    question: 'What characters are NOT allowed in Solace topic names?',
    options: [
      'Alphanumeric characters',
      'Forward slashes',
      'Null characters and certain control characters',
      'Underscores'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Null characters and certain control characters are not allowed in topic names.'
  },
  {
    id: 'topics-18',
    question: 'What is the benefit of using descriptive topic hierarchies?',
    options: [
      'Faster message delivery',
      'Enables meaningful filtering and easier debugging',
      'Reduces message size',
      'Improves encryption'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Descriptive topic hierarchies like "orders/region/status" make filtering intuitive and debugging easier.'
  },
  {
    id: 'topics-19',
    question: 'How do topic subscriptions differ from queue bindings?',
    options: [
      'They are identical',
      'Topics support wildcards while queue bindings are exact',
      'Queues support wildcards while topics do not',
      'Neither supports wildcards'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Topic subscriptions support wildcards for flexible message filtering.'
  },
  {
    id: 'topics-20',
    question: 'What is the purpose of a topic dispatch in Solace?',
    options: [
      'To compress topics',
      'To route messages to specific callbacks based on topic',
      'To encrypt topic names',
      'To log topic usage'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'Topic dispatch allows routing messages to specific handlers based on topic patterns.'
  },
  {
    id: 'topics-21',
    question: 'Can multiple * wildcards be used in a single Solace subscription?',
    options: [
      'No, only one wildcard allowed per subscription',
      'Yes, multiple * wildcards can appear in different positions',
      'Only if they are consecutive',
      'Only in guaranteed messaging'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Multiple * wildcards can appear in a subscription, like "*/orders/*/pending", matching one level each.'
  },
  {
    id: 'topics-22',
    question: 'Can a single message be published to multiple topics simultaneously?',
    options: [
      'Yes, using topic lists',
      'No, only one topic per message',
      'Only with guaranteed messaging',
      'Only with direct messaging'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'topics',
    explanation: 'Solace does not support publishing to multiple topics; use topic hierarchies instead.'
  },
  {
    id: 'topics-23',
    question: 'What is topic-to-queue mapping?',
    options: [
      'Converting topic names to queue names',
      'Subscribing a queue to topics so messages are spooled',
      'Encrypting topics',
      'Compressing topic data'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'topics',
    explanation: 'Topic-to-queue mapping adds subscriptions to a queue, enabling guaranteed delivery of topic messages.'
  },
  {
    id: 'topics-24',
    question: 'What is a shared subscription?',
    options: [
      'A subscription owned by multiple brokers',
      'A subscription where multiple consumers share message load',
      'A subscription with encryption',
      'A subscription with compression'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Shared subscriptions distribute messages across multiple consumers for load balancing.'
  },
  {
    id: 'topics-25',
    question: 'Are topic names case-sensitive in Solace?',
    options: [
      'No, they are case-insensitive',
      'Yes, they are case-sensitive',
      'Only the first level is case-sensitive',
      'Depends on configuration'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'topics',
    explanation: 'Solace topic names are case-sensitive; "Sales/Orders" differs from "sales/orders".'
  },
  {
    id: 'topics-26',
    question: 'Which Solace feature allows filtering messages on the broker using topic patterns?',
    options: [
      'Message compression',
      'Topic subscriptions with wildcards',
      'SSL encryption',
      'Load balancing'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'topics',
    explanation: 'Topic subscriptions with wildcards (* and >) allow subscribers to filter messages on the broker.'
  },

  // More Queue Questions
  {
    id: 'queues-16',
    question: 'What is the access type "exclusive" for a queue?',
    options: [
      'Multiple consumers can connect and share messages',
      'Only one consumer can bind at a time, with optional backup consumers',
      'No consumers can bind',
      'All consumers get all messages'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Exclusive queues allow one active consumer; others wait as backups.'
  },
  {
    id: 'queues-17',
    question: 'What is the purpose of a queue quota?',
    options: [
      'To limit message size',
      'To limit the amount of spool storage a queue can use',
      'To limit connection count',
      'To limit topic subscriptions'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Queue quotas limit spool usage to prevent a single queue from consuming all storage.'
  },
  {
    id: 'queues-18',
    question: 'What is the ingress rate limit on a queue?',
    options: [
      'Consumer message rate limit',
      'Publisher message rate limit into the queue',
      'Network bandwidth limit',
      'CPU usage limit'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Ingress rate limits control how fast messages can be published to a queue.'
  },
  {
    id: 'queues-19',
    question: 'What are temporary queues used for?',
    options: [
      'Permanent storage',
      'Request-reply patterns and short-lived messaging needs',
      'Backup storage',
      'Configuration storage'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Temporary queues are auto-deleted and ideal for request-reply patterns.'
  },
  {
    id: 'queues-20',
    question: 'What is selector-based message filtering on a queue?',
    options: [
      'Filtering by message size',
      'Filtering messages using SQL-like expressions on message properties',
      'Filtering by sender IP',
      'Filtering by timestamp only'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Selectors use SQL-like syntax to filter messages based on header properties.'
  },
  {
    id: 'queues-21',
    question: 'What is the consumer flow state "Active"?',
    options: [
      'Consumer is disconnected',
      'Consumer is actively receiving messages',
      'Consumer is paused',
      'Consumer is in error state'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Active state means the consumer is bound and receiving messages from the queue.'
  },
  {
    id: 'queues-22',
    question: 'What happens when max-delivered-unacked-msgs limit is reached?',
    options: [
      'New messages are published',
      'The consumer stops receiving new messages until it acknowledges some',
      'The queue is deleted',
      'All messages are dropped'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'This limit prevents slow consumers from accumulating too many unacknowledged messages.'
  },
  {
    id: 'queues-23',
    question: 'What is queue browsing?',
    options: [
      'Deleting queue messages',
      'Reading messages without removing them from the queue',
      'Creating new queues',
      'Monitoring queue performance'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Browsing allows reading messages without acknowledging/removing them from the queue.'
  },
  {
    id: 'queues-24',
    question: 'What is the purpose of egress window size?',
    options: [
      'To control message size',
      'To control how many messages can be outstanding before needing acknowledgment',
      'To set display resolution',
      'To configure encryption'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Egress window size controls flow control for message delivery to consumers.'
  },
  {
    id: 'queues-25',
    question: 'Can a queue have both topic subscriptions and direct queue bindings?',
    options: [
      'No, only one type allowed',
      'Yes, a queue can receive messages from multiple sources',
      'Only with guaranteed messaging',
      'Only with direct messaging'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'Queues can have topic subscriptions and receive direct publishes simultaneously.'
  },
  {
    id: 'queues-26',
    question: 'Are anonymous queues durable or non-durable?',
    options: [
      'Durable',
      'Non-durable',
      'Depends on configuration',
      'Only durable in HA mode'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Anonymous queues are always non-durable. The queue and data are removed when the client unbinds or disconnects.'
  },
  {
    id: 'queues-27',
    question: 'Does an exclusive queue guarantee message order?',
    options: [
      'No, messages can be out of order',
      'Yes, messages are always delivered in the order received',
      'Only for Direct messages',
      'Only with partitioning enabled'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Exclusive queues always deliver messages in the order they are received, with only one active consumer.'
  },
  {
    id: 'queues-28',
    question: 'Which queue types support queue browsing?',
    options: [
      'All queue types',
      'Exclusive and non-exclusive non-partitioned queues',
      'Only partitioned queues',
      'Only anonymous queues'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'queues',
    explanation: 'Queue browsing is supported for exclusive queues and non-partitioned non-exclusive queues. Partitioned queues do not support browsing.'
  },
  {
    id: 'queues-29',
    question: 'How does the event broker assign messages to partitions in a partitioned queue?',
    options: [
      'Round-robin distribution',
      'Hash of partition key MOD partition count',
      'Based on message size',
      'Random assignment'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'The broker calculates: partition = partition-key-hash MOD partition-count to determine which partition receives each message.'
  },
  {
    id: 'queues-30',
    question: 'How do you configure a queue as a last value queue?',
    options: [
      'Set queue priority to maximum',
      'Set max-spool-usage (or Messages Queued Quota) to 0',
      'Enable exclusive access mode',
      'Disable message persistence'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'A last value queue is created by setting max-spool-usage to 0, which makes the queue spool only the last message received.'
  },
  {
    id: 'queues-31',
    question: 'What happens when a message moved to a DMQ becomes dead again?',
    options: [
      'Moved to a secondary DMQ',
      'It is deleted (no DMQ chaining)',
      'Sent back to original queue',
      'Stored permanently'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'queues',
    explanation: 'There is no chaining of DMQ behavior. If a message in the DMQ becomes dead again, it is deleted.'
  },
  {
    id: 'queues-33',
    question: 'What triggers partition rebalancing in a partitioned queue?',
    options: [
      'Message rate exceeds threshold',
      'Number of consumers (bound flows) changes',
      'Queue reaches capacity',
      'Broker restart'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Partition rebalancing is triggered when the number of consumers changes, reassigning partition-to-flow mappings to distribute flows evenly.'
  },
  {
    id: 'queues-34',
    question: 'Do partitioned queues support queue browsing?',
    options: [
      'Yes, for all partitions',
      'No, queue browsing is not supported for partitioned queues',
      'Only for the parent queue',
      'Only with admin privileges'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Queue browsing is not supported for partitioned queues. The event broker rejects browsing flow bind requests to partitioned queues.'
  },
  {
    id: 'queues-35',
    question: 'What is the difference between key-to-partition mapping and partition-to-flow mapping?',
    options: [
      'They are the same thing',
      'Key-to-partition maps messages to partitions; partition-to-flow maps partitions to consumers',
      'One is for Direct, one is for Guaranteed',
      'One is for HA, one is for DR'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'queues',
    explanation: 'Key-to-partition mapping determines which partition receives messages based on partition key hash. Partition-to-flow mapping assigns partitions to consumer flows.'
  },

  // More Replay Questions
  {
    id: 'replay-16',
    question: 'What is the replay log window?',
    options: [
      'A GUI for viewing replays',
      'The time or message range available for replay',
      'A log file viewer',
      'Network monitoring window'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'The replay window defines how far back messages can be replayed from the log.'
  },
  {
    id: 'replay-17',
    question: 'Can replay be triggered programmatically?',
    options: [
      'No, only through CLI',
      'Yes, through API calls',
      'Only through the web console',
      'Only through SEMP'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay can be initiated through client APIs, SEMP, and CLI.'
  },
  {
    id: 'replay-18',
    question: 'What happens to new messages during a replay?',
    options: [
      'They are discarded',
      'They are delivered after replay completes or interleaved',
      'They cause errors',
      'They are compressed'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'New messages can be interleaved with replay or delivered after replay completes.'
  },
  {
    id: 'replay-22',
    question: 'What is the purpose of replay with time-based start?',
    options: [
      'To replay all messages',
      'To start replay from a specific point in time',
      'To speed up replay',
      'To encrypt replay data'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'replay',
    explanation: 'Time-based replay starts from a specific timestamp, useful for recovery scenarios.'
  },
  {
    id: 'replay-24',
    question: 'Can replay log span across broker restarts?',
    options: [
      'No, it is cleared on restart',
      'Yes, replay log is persisted to disk',
      'Only with special hardware',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'replay',
    explanation: 'Replay log is persisted to disk and survives broker restarts.'
  },
  {
    id: 'replay-25',
    question: 'What is the typical use case for message replay?',
    options: [
      'Load testing only',
      'Recovering from errors, onboarding new consumers, or debugging',
      'Reducing storage costs',
      'Encrypting data'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'replay',
    explanation: 'Replay is valuable for error recovery, new consumer catchup, and system debugging.'
  },

  // More Bridge Questions
  {
    id: 'bridges-16',
    question: 'What is a remote message VPN?',
    options: [
      'A VPN on the local broker',
      'A message VPN on a different broker connected via bridge',
      'A virtual network',
      'An encrypted tunnel'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Remote message VPN refers to the VPN on the other end of a broker bridge.'
  },
  {
    id: 'bridges-17',
    question: 'What is bridge queue depth?',
    options: [
      'Physical depth of hardware',
      'Number of messages queued for transmission over the bridge',
      'Network cable length',
      'Configuration complexity'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Bridge queue depth shows messages waiting to be transmitted over the bridge.'
  },
  {
    id: 'bridges-18',
    question: 'Can bridges be used between cloud and on-premises brokers?',
    options: [
      'No, only same environment',
      'Yes, bridges work across any network-connected brokers',
      'Only with special licensing',
      'Only with hardware brokers'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'bridges',
    explanation: 'Bridges can connect brokers across cloud, on-premises, or hybrid environments.'
  },
  {
    id: 'bridges-19',
    question: 'What happens to messages when a bridge connection fails?',
    options: [
      'Messages are lost',
      'Messages are spooled until the bridge reconnects',
      'Messages are returned to sender',
      'The broker shuts down'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Guaranteed messages are spooled and delivered when the bridge reconnects.'
  },
  {
    id: 'bridges-20',
    question: 'What is the default bridge behavior for message routing?',
    options: [
      'Round-robin only',
      'Based on topic subscriptions configured on the bridge',
      'Random distribution',
      'Priority-based only'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Bridges forward messages based on topic subscriptions configured for the bridge.'
  },
  {
    id: 'bridges-21',
    question: 'Can bridges support both TCP and TLS connections?',
    options: [
      'Only TCP',
      'Only TLS',
      'Yes, both TCP and TLS',
      'Neither'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    topic: 'bridges',
    explanation: 'Bridges support both plain TCP and encrypted TLS connections.'
  },
  {
    id: 'bridges-23',
    question: 'What is a bridge trust relationship?',
    options: [
      'Legal contract between brokers',
      'Authentication and authorization configuration between bridged brokers',
      'Physical cable connection',
      'Encryption algorithm'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'bridges',
    explanation: 'Trust relationships define authentication credentials and access permissions.'
  },
  {
    id: 'bridges-25',
    question: 'What is the purpose of bridge operational state?',
    options: [
      'To show physical location',
      'To indicate if the bridge is up, down, or in error',
      'To show message count',
      'To display configuration changes'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'bridges',
    explanation: 'Operational state shows the current health and connectivity status of the bridge.'
  },

  // More DMR Questions
  {
    id: 'dmr-17',
    question: 'Can DMR work with different Message VPNs?',
    options: [
      'No, all brokers must use the same VPN name',
      'Yes, DMR can route between different VPNs',
      'Only with special configuration',
      'Only in cloud deployments'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'DMR can route messages between brokers with different Message VPN configurations.'
  },
  {
    id: 'dmr-18',
    question: 'What is subscription propagation in DMR?',
    options: [
      'Copying configuration files',
      'Automatically sharing subscription information across the mesh',
      'Encrypting subscriptions',
      'Compressing subscription data'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'Subscription propagation shares topic interest across DMR nodes automatically.'
  },
  {
    id: 'dmr-19',
    question: 'What happens to messages in DMR when a node fails?',
    options: [
      'All messages are lost',
      'Messages are automatically rerouted to available nodes',
      'The entire mesh shuts down',
      'Manual intervention is always required'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR automatically reroutes traffic around failed nodes for resilience.'
  },
  {
    id: 'dmr-20',
    question: 'What is a DMR external link?',
    options: [
      'A link to external databases',
      'A connection between DMR clusters in different networks',
      'A link to the internet',
      'A monitoring connection'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'External links connect separate DMR clusters across networks or datacenters.'
  },
  {
    id: 'dmr-21',
    question: 'Does DMR support message transformation?',
    options: [
      'Yes, messages are automatically transformed',
      'No, messages pass through unchanged',
      'Only for JSON messages',
      'Only with plugins'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR routes messages without transformation; content passes through unchanged.'
  },
  {
    id: 'dmr-22',
    question: 'What is the DMR internal link?',
    options: [
      'A link between different clouds',
      'A connection between brokers within the same DMR cluster',
      'An internal database connection',
      'A link to monitoring systems'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'Internal links connect brokers within a single DMR cluster.'
  },
  {
    id: 'dmr-23',
    question: 'Can DMR clusters span multiple cloud providers?',
    options: [
      'No, single cloud only',
      'Yes, DMR supports multi-cloud deployments',
      'Only AWS and Azure',
      'Only with hardware brokers'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dmr',
    explanation: 'DMR can span multiple cloud providers for true multi-cloud event routing.'
  },
  {
    id: 'dmr-25',
    question: 'How does DMR handle duplicate messages?',
    options: [
      'It cannot handle duplicates',
      'Built-in deduplication prevents loops and duplicates',
      'Manual deduplication required',
      'Messages are always duplicated'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'dmr',
    explanation: 'DMR has built-in mechanisms to prevent message loops and duplicates.'
  },

  // More HA Questions
  {
    id: 'ha-16',
    question: 'What is the purpose of the HA heartbeat?',
    options: [
      'Load balancing',
      'Detecting if the peer broker is alive',
      'Message compression',
      'Data encryption'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'ha',
    explanation: 'Heartbeats allow HA peers to monitor each other for failure detection.'
  },
  {
    id: 'ha-17',
    question: 'What is AD (Assured Delivery) in HA context?',
    options: [
      'A marketing term',
      'Synchronous replication ensuring messages survive failover',
      'Asynchronous delivery',
      'Automatic deletion'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'AD ensures messages are replicated to backup before acknowledging to publishers.'
  },
  {
    id: 'ha-18',
    question: 'Can HA pairs handle planned maintenance without downtime?',
    options: [
      'No, always requires downtime',
      'Yes, through graceful failover during maintenance windows',
      'Only with hardware appliances',
      'Only during off-hours'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Rolling upgrades and graceful failover enable maintenance without service interruption.'
  },
  {
    id: 'ha-19',
    question: 'What is the purpose of HA mate link?',
    options: [
      'User authentication',
      'Synchronizing data between primary and backup brokers',
      'Network monitoring',
      'Client load balancing'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'The mate link replicates configuration and messages between HA pairs.'
  },
  {
    id: 'ha-20',
    question: 'What happens to client connections during HA failover?',
    options: [
      'Clients must manually reconnect',
      'Clients automatically reconnect to the new primary',
      'All connections are permanently lost',
      'Only new connections work'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Solace APIs support automatic reconnection to the failover broker.'
  },
  {
    id: 'ha-21',
    question: 'What is the monitoring node role in HA?',
    options: [
      'It processes messages',
      'It provides quorum and tie-breaking for split-brain scenarios',
      'It stores backups',
      'It handles client connections'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    topic: 'ha',
    explanation: 'The monitoring node provides quorum to prevent split-brain in 3-node setups.'
  },
  {
    id: 'ha-22',
    question: 'Can HA be configured after initial broker deployment?',
    options: [
      'No, only at installation',
      'Yes, HA can be enabled on existing brokers',
      'Only with factory reset',
      'Only by Solace support'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'HA can be configured on existing deployments with proper planning.'
  },
  {
    id: 'ha-24',
    question: 'What is the recommended HA setup for zero message loss?',
    options: [
      'Single broker only',
      'Synchronous HA with AD enabled',
      'Direct messaging only',
      'No replication needed'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Synchronous HA with Assured Delivery ensures no message loss during failover.'
  },
  {
    id: 'ha-25',
    question: 'What is the purpose of HA redundancy mode configuration?',
    options: [
      'Setting message priority',
      'Defining primary/backup relationships and failover behavior',
      'Configuring encryption',
      'Setting storage limits'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'ha',
    explanation: 'Redundancy mode controls how primary/backup roles are assigned and maintained.'
  },

  // More DR Questions
  {
    id: 'dr-16',
    question: 'What is the recommended maximum distance between DR sites?',
    options: [
      'Same building only',
      'No hard limit, but network latency affects RPO',
      'Within 10 miles',
      'Same rack only'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'Distance is limited by acceptable latency and RPO requirements, not physical distance.'
  },
  {
    id: 'dr-17',
    question: 'Can DR replication work over the public internet?',
    options: [
      'No, requires private network',
      'Yes, with TLS encryption for security',
      'Only with hardware appliances',
      'Only for small messages'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'dr',
    explanation: 'DR can work over internet with TLS encryption, though private networks are preferred.'
  },
  {
    id: 'dr-18',
    question: 'What is DR queue synchronization?',
    options: [
      'Copying queue configuration only',
      'Replicating queue messages and state to the DR site',
      'Deleting old queues',
      'Compressing queue data'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'Queue sync ensures DR site has current messages and queue state.'
  },
  {
    id: 'dr-19',
    question: 'What is the role of DR in compliance requirements?',
    options: [
      'None',
      'Meeting regulatory requirements for business continuity',
      'Only for encryption compliance',
      'Only for audit logging'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'DR helps meet regulatory requirements for data protection and business continuity.'
  },
  {
    id: 'dr-20',
    question: 'What is controlled switchover in DR?',
    options: [
      'Random site selection',
      'Planned transition of traffic to DR site for maintenance or testing',
      'Automatic failover',
      'Load balancing'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    topic: 'dr',
    explanation: 'Controlled switchover allows planned migration to DR site without data loss.'
  },
  {
    id: 'dr-21',
    question: 'Can DR sites be in different cloud regions?',
    options: [
      'No, same region only',
      'Yes, for geographic redundancy',
      'Only across AWS regions',
      'Only with special hardware'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'dr',
    explanation: 'DR works across different cloud regions for disaster resilience.'
  },
  {
    id: 'dr-24',
    question: 'What is the standard Solace DR replication topology?',
    options: [
      'One primary site replicating to one DR site',
      'Automatic replication to all cloud regions',
      'Mesh replication between all sites',
      'No predefined topology'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    topic: 'dr',
    explanation: 'Standard Solace DR uses active-standby replication between one primary site and one DR site.'
  },
  {
    id: 'dr-25',
    question: 'What is DR failback?',
    options: [
      'Permanent migration to DR',
      'Returning operations to the primary site after it is restored',
      'Disabling DR',
      'Data deletion'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    topic: 'dr',
    explanation: 'Failback restores operations to the primary site once it is recovered.'
  },
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle options and update correctAnswer index
function shuffleQuestionOptions(question: Question): Question {
  const correctOption = question.options[question.correctAnswer];
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctOption);
  
  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectIndex,
  };
}

// Function to get questions for a specific level
export function getQuestionsForLevel(levelNumber: number, excludeIds: string[] = []): Question[] {
  const level = LEVELS[levelNumber - 1];
  if (!level) return [];
  
  // Filter questions by the level's difficulty and exclude already used questions
  const excludeSet = new Set(excludeIds);
  const levelQuestions = QUESTIONS.filter(q => q.difficulty === level.difficulty && !excludeSet.has(q.id));
  
  // Shuffle questions and pick the required number
  const shuffledQuestions = shuffleArray(levelQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, level.questionsCount);
  
  // Shuffle options for each question to randomize answer positions
  return selectedQuestions.map(shuffleQuestionOptions);
}

// Function to get level by number
export function getLevel(levelNumber: number): Level | undefined {
  return LEVELS.find(l => l.number === levelNumber);
}

// Calculate total possible score
export function calculateMaxScore(): number {
  return LEVELS.reduce((total, level) => {
    return total + (level.pointsPerQuestion * level.questionsCount);
  }, 0);
}
