"use client";

import { useCallback, useState } from "react";

export interface DisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

interface UseDisclosureProps {
  defaultIsOpen?: boolean;
}

export function useDisclosure({
  defaultIsOpen = false,
}: UseDisclosureProps = {}): DisclosureReturn {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
