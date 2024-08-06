import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// Custom Hook
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider value={{ isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
}