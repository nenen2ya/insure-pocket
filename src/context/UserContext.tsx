// src/context/UserContext.tsx
import React, { createContext, useState, useContext, useEffect } from "react";

// 유저 정보 타입 정의
interface User {
  id: number;
  nickname: string;
  user_name: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Context 생성
const UserContext = createContext<UserContextType | undefined>(undefined);

// ✅ Provider 컴포넌트
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // localStorage에서 초기 유저 불러오기 (새로고침 시 유지)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Context를 쉽게 가져다 쓰기 위한 훅
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
