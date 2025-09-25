import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function CommentsPage() {
  const navigate = useNavigate();
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  const [comments, setComments] = useState([
    "缅怀先烈，铭记历史。",
    "英雄永垂不朽！",
    "向烈士致敬！",
    "他们的牺牲换来了我们的幸福生活。",
    "不忘初心，牢记使命。",
    "烈士精神永远激励我们前进。",
    "感谢先烈们的无私奉献。",
    "传承红色基因，弘扬革命精神。",
    "让我们一起为烈士们献上最崇高的敬意。"
  ]);
  const [newComment, setNewComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 定义辱骂词汇列表（中英文）
  const bannedWords = [
    // 中文辱骂词汇
    '傻逼', 'sb', 'SB', '傻b', '煞笔', '沙比', '啥比', '傻比',
    '操', '草', '艹', '卧槽', '握草', '沃草', '废物', '白痴', '智障',
    '神经病', '有病', '脑子有病', '脑子进水', '脑残', '弱智',
    '混蛋', '王八蛋', '滚蛋', '滚', '去死', '该死', '尼玛', '你妈',
    '滚开', '垃圾', '辣鸡', '辣鸡', 'cnm', 'nm', 'nmsl', '妈的', '妈逼',
    '狗屎', '狗屁', '放屁', '屁', '屌', '吊', '叼', '牛逼', '牛批', '🐂', '🐮',
    'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'damn',
    'crap', 'piss', 'dick', 'cock', 'cunt', 'faggot', 'bullshit',
    'dumb', 'idiot', 'stupid', 'moron', 'retard', 'loser',
    'hell', 'suck', 'sucker', 'gay', 'damn it', 'wtf', 'wth',
    // 可以继续添加更多词汇
  ];

  // 检查留言是否包含辱骂词汇
  const containsBannedWords = (text) => {
    const lowerText = text.toLowerCase();
    for (const word of bannedWords) {
      if (lowerText.includes(word.toLowerCase())) {
        return true;
      }
    }
    return false;
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleAddComment = () => {
    setShowCommentForm(true);
    setShowBackButton(false); // 隐藏返回按钮
    setErrorMessage(''); // 清除之前的错误信息
  };

  const handleSubmitComment = () => {
    // 检查留言是否为空
    if (newComment.trim() === '') {
      setErrorMessage('留言内容不能为空');
      setShowCommentForm(false); // 隐藏留言表单
      setShowBackButton(true); // 显示返回按钮
      return;
    }

    // 检查留言是否包含辱骂词汇
    if (containsBannedWords(newComment)) {
      setErrorMessage('留言包含不适当的内容，请修改后重新提交');
      setShowBackButton(true); // 显示返回按钮
      return;
    }

    // 如果通过审核，添加留言
    setComments([newComment, ...comments.slice(0, 8)]); // 添加新留言并保持最多9个
    setNewComment('');
    setErrorMessage('');
    setShowCommentForm(false);
    setShowBackButton(true); // 显示返回按钮
  };

  const handleCancelComment = () => {
    setNewComment('');
    setErrorMessage('');
    setShowCommentForm(false);
    setShowBackButton(true); // 显示返回按钮
  };

  return (
    <div className="comments-page">
      {showBackButton && <button onClick={handleBack} className="back-button"></button>}
      
      <h1 className="comments-title"></h1>
      
      <div className="comments-grid">
        {comments.map((comment, index) => (
          <div key={index} className="comment-card">
            <p className="comment-text">{comment}</p>
          </div>
        ))}
      </div>
      
      <button className="add-comment-button" onClick={handleAddComment}>
        发表留言
      </button>
      
      {showCommentForm && (
        <div className="overlay">
          <div className="comment-form-container">
            <div
              className="comment-input-div"
              contentEditable
              onInput={(e) => setNewComment(e.target.textContent)}
            />
            <button className="send-button" onClick={handleSubmitComment}></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentsPage;