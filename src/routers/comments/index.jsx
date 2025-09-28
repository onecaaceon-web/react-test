import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { bannedWords, comments as initialComments } from '../../data/data';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function CommentsPage() {
  const navigate = useNavigate();
  const [comments, setComments] = useState(() => [...initialComments]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    setShowBackButton(false); 
    setErrorMessage(''); 
  };

  const handleSubmitComment = () => {
    if (newComment.trim() === '') {
      setErrorMessage('留言内容不能为空');
      setShowCommentForm(false);
      return;
    }

    if (containsBannedWords(newComment)) {
      setErrorMessage('留言包含不适当的内容，请修改后重新提交');
      setShowBackButton(true); // 显示返回按钮
      return;
    }

    // 如果通过审核，添加留言
    setComments([newComment, ...comments.slice(0, 8)]); // 最多9个！！！！！！
    setNewComment('');
    setErrorMessage('');
    setShowCommentForm(false);
    setShowBackButton(true); 
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
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
      
      <button className="add-comment-button" onClick={handleAddComment}>
        发表留言
      </button>
      
      {showCommentForm && (
        <CommentForm 
          newComment={newComment}
          setNewComment={setNewComment}
          handleSubmitComment={handleSubmitComment}
          handleCancelComment={handleCancelComment}
        />
      )}
    </div>
  );
}

export default CommentsPage;