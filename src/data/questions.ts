export interface Question {
  id: number;
  text: string;
  options: string[];
  score: number[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: '你是否收到过"校园贷"相关的短信或电话？',
    options: ['从未收到', '收到过但没理会', '收到过并咨询过', '曾经办理过'],
    score: [10, 8, 4, 0],
  },
  {
    id: 2,
    text: '你知道"AB贷"的主要诈骗手段吗？',
    options: ['完全不知道', '听说过但不清楚', '比较了解', '非常了解'],
    score: [2, 5, 8, 10],
  },
  {
    id: 3,
    text: '年化收益率超过多少的理财产品基本可以认定为骗局？',
    options: ['5%', '8%', '12%', '15%'],
    score: [4, 6, 10, 8],
  },
  {
    id: 4,
    text: '你是否有过刷单返利的经历？',
    options: ['从未有过', '听说过但没做过', '做过但没被骗', '做过并被骗过'],
    score: [10, 8, 4, 0],
  },
  {
    id: 5,
    text: '你认为"只要是官方客服打来的电话就一定是安全的"？',
    options: ['完全同意', '比较同意', '不太同意', '完全不同意'],
    score: [0, 3, 7, 10],
  },
  {
    id: 6,
    text: '你是否了解个人征信的重要性？',
    options: ['完全不了解', '了解一点', '比较了解', '非常了解'],
    score: [2, 5, 8, 10],
  },
  {
    id: 7,
    text: '你是否有过超前消费的经历？',
    options: ['从未有过', '偶尔有过', '经常有', '一直超前消费'],
    score: [10, 8, 4, 0],
  },
  {
    id: 8,
    text: '你知道"杀猪盘"诈骗的主要特征吗？',
    options: ['完全不知道', '听说过但不清楚', '比较了解', '非常了解'],
    score: [2, 5, 8, 10],
  },
  {
    id: 9,
    text: '你是否会点击短信中的陌生链接？',
    options: ['经常会', '偶尔会', '很少会', '绝不会'],
    score: [0, 3, 7, 10],
  },
  {
    id: 10,
    text: '你是否有过投资理财的经历？',
    options: ['从未有过', '尝试过基金', '尝试过股票', '尝试过多种投资'],
    score: [5, 8, 9, 10],
  },
  {
    id: 11,
    text: '你认为"低风险、高回报"的投资项目存在吗？',
    options: ['肯定存在', '可能存在', '不太可能存在', '肯定不存在'],
    score: [0, 3, 8, 10],
  },
  {
    id: 12,
    text: '你是否会向陌生人透露自己的银行卡号和密码？',
    options: ['经常会', '偶尔会', '很少会', '绝不会'],
    score: [0, 2, 5, 10],
  },
  {
    id: 13,
    text: '你是否了解"洗钱"的相关法律知识？',
    options: ['完全不了解', '了解一点', '比较了解', '非常了解'],
    score: [2, 5, 8, 10],
  },
  {
    id: 14,
    text: '你是否参加过学校组织的反诈宣传活动？',
    options: ['从未参加过', '参加过1-2次', '参加过3-5次', '参加过5次以上'],
    score: [3, 6, 8, 10],
  },
  {
    id: 15,
    text: '你认为自己的金融知识水平如何？',
    options: ['很差', '一般', '较好', '很好'],
    score: [3, 5, 8, 10],
  },
  {
    id: 16,
    text: '你是否遇到过冒充公检法的诈骗电话？',
    options: ['从未遇到过', '遇到过但没理会', '遇到过并相信过', '遇到过并被骗过'],
    score: [10, 8, 3, 0],
  },
  {
    id: 17,
    text: '你是否会下载来源不明的APP？',
    options: ['经常会', '偶尔会', '很少会', '绝不会'],
    score: [0, 3, 7, 10],
  },
  {
    id: 18,
    text: '你是否了解"养老诈骗"的常见套路？',
    options: ['完全不了解', '了解一点', '比较了解', '非常了解'],
    score: [2, 5, 8, 10],
  },
  {
    id: 19,
    text: '你认为大学生最容易陷入哪种金融诈骗？',
    options: ['校园贷', '刷单返利', '虚假理财', '冒充客服'],
    score: [10, 10, 10, 10], // 这题是认知题，只要有认知都给分
  },
  {
    id: 20,
    text: '你希望通过哪些方式学习金融知识？',
    options: ['线上科普文章', '线下宣讲活动', '短视频', '知识竞赛'],
    score: [10, 10, 10, 10], // 这题是意愿题，都给分
  },
];

export interface QuizResult {
  score: number;
  level: string;
  comment: string;
}

export function calculateResult(answers: number[]): QuizResult {
  let totalScore = 0;
  answers.forEach((answer, index) => {
    if (answer !== undefined && questions[index]) {
      totalScore += questions[index].score[answer];
    }
  });
  
  const averageScore = Math.round(totalScore / 2);
  
  let level, comment;
  if (averageScore >= 80) {
    level = '优秀';
    comment = '太棒了！你具备很强的金融素养和反诈意识，能够很好地识别金融风险。继续保持学习，帮助身边的人一起提高防骗能力！';
  } else if (averageScore >= 60) {
    level = '良好';
    comment = '不错！你有一定的金融素养，但还有提升空间。建议多学习防骗知识，关注我们平台的科普文章，不断提高自己的风险识别能力。';
  } else {
    level = '需提升';
    comment = '你的金融素养还有很大提升空间。别担心，这很正常！从现在开始，多学习金融知识，提高防骗意识。我们平台有很多通俗易懂的科普文章，快来一起学习吧！';
  }
  
  return {
    score: averageScore,
    level,
    comment,
  };
}
