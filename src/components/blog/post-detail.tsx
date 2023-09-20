'use client'

import MarkdownPreview from '@uiw/react-markdown-preview/esm';

import React from 'react';

interface PostDetailProps {
  content: string
}

const PostDetail: React.FC<PostDetailProps> = ({ content }): JSX.Element => {
  return <MarkdownPreview source={content} />
}

export default PostDetail
