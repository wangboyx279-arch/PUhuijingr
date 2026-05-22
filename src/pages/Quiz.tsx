import { useState } from 'react';
import { questions, calculateResult } from '../data/questions';
import { useStore } from '../store/useStore';

type QuizStep = 'intro' | 'questions' | 'result';

export default function Quiz() {
  const [step, setStep] = useState<QuizStep>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quizAnswers = useStore((state) => state.quizAnswers);
  const setQuizAnswer = useStore((state) => state.setQuizAnswer);
  const resetQuiz = useStore((state) => state.resetQuiz);

  const startQuiz = () => {
    resetQuiz();
    setCurrentQuestion(0);
    setStep('questions');
  };

  const selectAnswer = (answerIndex: number) => {
    setQuizAnswer(currentQuestion, answerIndex);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('result');
    }
  };

  const restartQuiz = () => {
    setStep('intro');
  };

  const downloadCertificate = () => {
    alert('电子证书下载功能即将上线！');
  };

  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: '我的金融素养测评结果',
        text: '快来测测你的金融素养和反诈意识吧！',
      });
    } else {
      alert('分享功能已触发！');
    }
  };

  const result = step === 'result' ? calculateResult(quizAnswers) : null;

  const getResultColor = () => {
    if (!result) return '#165DFF';
    if (result.score >= 80) return '#52C41A';
    if (result.score >= 60) return '#FF7D00';
    return '#F5222D';
  };

  return (
    <div className="min-h-screen pb-20 page-transition">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-20">
        <h1 className="text-xl font-bold text-gray-800">在线测评</h1>
      </div>

      {/* Intro Step */}
      {step === 'intro' && (
        <div className="p-6">
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-gradient-to-br from-[#165DFF] to-[#36CFC9] rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-white text-4xl">📝</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              大学生金融素养与反诈意识测评
            </h2>
            <p className="text-gray-600 mb-6">
              本测评共{questions.length}道单选题，预计用时5分钟，完成后将生成您的专属金融安全等级报告
            </p>
            <button
              onClick={startQuiz}
              className="w-full bg-[#FF7D00] text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              开始测评
            </button>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">测评规则</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#165DFF] mt-2 flex-shrink-0" />
                <span>本测评完全免费，所有数据仅用于学术研究</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#165DFF] mt-2 flex-shrink-0" />
                <span>请根据您的真实情况作答，结果仅供参考</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#165DFF] mt-2 flex-shrink-0" />
                <span>完成测评后可下载电子证书</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Questions Step */}
      {step === 'questions' && (
        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>第 {currentQuestion + 1} 题</span>
              <span>共 {questions.length} 题</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#165DFF] transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              {questions[currentQuestion].text}
            </h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                    quizAnswers[currentQuestion] === index
                      ? 'border-[#165DFF] bg-[#165DFF] text-white'
                      : 'border-gray-200 hover:border-[#165DFF] hover:bg-blue-50'
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextQuestion}
            disabled={quizAnswers[currentQuestion] === undefined}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-colors ${
              quizAnswers[currentQuestion] === undefined
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#165DFF] text-white hover:bg-blue-600'
            }`}
          >
            {currentQuestion < questions.length - 1 ? '下一题' : '完成测评'}
          </button>
        </div>
      )}

      {/* Result Step */}
      {step === 'result' && result && (
        <div className="p-6">
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 mb-6">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${getResultColor()}15` }}>
              <div className="text-5xl" style={{ color: getResultColor() }}>
                {result.score >= 80 ? '🏆' : result.score >= 60 ? '👍' : '📚'}
              </div>
            </div>
            <div className="text-5xl font-bold mb-2" style={{ color: getResultColor() }}>
              {result.score}
              <span className="text-lg font-normal text-gray-400">分</span>
            </div>
            <div
              className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
              style={{ backgroundColor: `${getResultColor()}15`, color: getResultColor() }}
            >
              金融安全等级：{result.level}
            </div>
            <p className="text-gray-600 leading-relaxed">{result.comment}</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={downloadCertificate}
              className="w-full bg-[#165DFF] text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              📜 下载电子证书
            </button>
            <button
              onClick={shareResult}
              className="w-full bg-white text-[#165DFF] py-4 rounded-2xl font-bold text-lg border-2 border-[#165DFF] hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              📤 分享结果
            </button>
            <button
              onClick={restartQuiz}
              className="w-full text-gray-500 py-3 font-medium"
            >
              重新测评
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
