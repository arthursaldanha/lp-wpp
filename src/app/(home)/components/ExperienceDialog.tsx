"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog";

interface ExperienceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExperienceDialog({
  open,
  onOpenChange,
}: ExperienceDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full !max-w-[1440px] space-y-8 py-16 text-center"
        showCloseButton={false}
      >
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-slate-950 text-5xl font-semibold text-center">
            Teste agora a experiência <br /> completa no WhatsApp
          </DialogTitle>

          <DialogDescription className="text-zinc-800 text-xl font-medium text-center">
            Explore na prática como sua empresa pode automatizar atendimentos,{" "}
            <br />
            gerar vendas e encantar clientes com fluxos inteligentes no WhatsApp
          </DialogDescription>
        </DialogHeader>

        <div className="w-full max-w-[91.66%] space-y-6 mx-auto bg-gray-100 p-12 rounded-3xl">
          <div className="space-y-4">
            <p className="text-slate-950 text-3xl font-semibold">
              Escaneie o QR Code abaixo com a câmera <br /> do seu celular para
              começar
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/home/dialog/qr-code.svg"
                alt="QR Code WhatsApp"
                width={250}
                height={250}
              />
            </div>

            <p className="text-slate-950 text-xl font-normal">
              Você será direcionado a um atendimento <br /> automatizado no
              WhatsApp.
            </p>
          </div>

          <div className="w-full max-w-2xl mx-auto p-2 bg-blue-100">
            <span className="text-zinc-800 text-base font-medium rounded-lg">
              Interaja como se fosse um cliente e veja o que acontece!
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
