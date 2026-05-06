import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BriefingData {
  identity: string | null;
  visualReference: string | null;
  visualReferenceNotes: string | null;
  techOrigin: string | null;
  mainObjective: string | null;
  mediaSupport: string | null;
  progressTracking: string | null;
  checkoutType: string | null;
  adminPanel: string | null;
  userVolume: string | null;
  simultaneousAccess: string | null;
  platformType: string | null;
  launchDeadline: string | null;
  budgetCeiling: string | null;
  maintenanceInterest: string | null;
  contactName: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class BriefingService {
  private FORMSPREE_URL = 'https://formspree.io/f/mlgznnbn';

  private data = new BehaviorSubject<BriefingData>({
    identity: null,
    visualReference: null,
    visualReferenceNotes: null,
    techOrigin: null,
    mainObjective: null,
    mediaSupport: null,
    progressTracking: null,
    checkoutType: null,
    adminPanel: null,
    userVolume: null,
    simultaneousAccess: null,
    platformType: null,
    launchDeadline: null,
    budgetCeiling: null,
    maintenanceInterest: null,
    contactName: null,
    contactEmail: null,
    contactPhone: null,
  });

  constructor(private http: HttpClient) {}

  updateData(newData: Partial<BriefingData>) {
    this.data.next({ ...this.data.value, ...newData });
  }

  getData(): BriefingData {
    return this.data.value;
  }

  submit(): Observable<any> {
    const data = this.data.value;

    // Mapeamento para nomes mais amigáveis e organizados no e-mail do Formspree
    const friendlyPayload = {
      '01. [ CONTATO ]': '--------------------------------',
      'Nome do Cliente': data.contactName,
      'E-mail': data.contactEmail,
      'WhatsApp/Telefone': data.contactPhone,

      '02. [ DESIGN E ESTILO ]': '--------------------------------',
      'Identidade Visual': this.getFriendlyValue('identity', data.identity),
      'Referência Visual': this.getFriendlyValue('visualReference', data.visualReference),
      'Notas de Referência': data.visualReferenceNotes || 'Nenhuma nota adicional',

      '03. [ CONTEXTO TÉCNICO ]': '--------------------------------',
      'Origem do Projeto': this.getFriendlyValue('techOrigin', data.techOrigin),
      'Objetivo Principal': this.getFriendlyValue('mainObjective', data.mainObjective),
      'Suporte a Mídia': this.getFriendlyValue('mediaSupport', data.mediaSupport),
      'Rastreamento de Progresso': this.getFriendlyValue('progressTracking', data.progressTracking),

      '04. [ OPERACIONAL E ESCALA ]': '--------------------------------',
      'Tipo de Checkout': this.getFriendlyValue('checkoutType', data.checkoutType),
      'Painel Administrativo': this.getFriendlyValue('adminPanel', data.adminPanel),
      'Volume de Usuários': this.getFriendlyValue('userVolume', data.userVolume),
      'Carga de Acessos': this.getFriendlyValue('simultaneousAccess', data.simultaneousAccess),
      'Tipo de Plataforma': this.getFriendlyValue('platformType', data.platformType),

      '05. [ FECHAMENTO ]': '--------------------------------',
      'Prazo de Lançamento': this.getFriendlyValue('launchDeadline', data.launchDeadline),
      'Teto de Investimento': this.getFriendlyValue('budgetCeiling', data.budgetCeiling),
      'Suporte Pós-Entrega': this.getFriendlyValue('maintenanceInterest', data.maintenanceInterest),
    };

    return this.http.post(this.FORMSPREE_URL, friendlyPayload);
  }

  private getFriendlyValue(key: string, value: string | null): string {
    if (!value) return '❌ Não informado';

    const maps: Record<string, Record<string, string>> = {
      identity: {
        new: '✨ Criar do Zero (Preciso de Identidade)',
        existing: '🎨 Já Possuo Marca Própria',
      },
      visualReference: {
        netflix: '🍿 Estilo Netflix (Premium Dark)',
        other: '🎯 Referência Personalizada',
      },
      techOrigin: {
        zero: '🌱 Projeto Novo (Do Zero)',
        migration: '🚀 Migração (Evolução de Hotmart/Kajabi)',
      },
      mainObjective: {
        premium: '💎 Elevar Autoridade (Premium Feel)',
        fees: '📉 Reduzir Taxas (Maior Lucro)',
        mobile: '📱 Foco Total em Mobile',
      },
      mediaSupport: {
        audio: '🎙️ Apenas Áudio',
        multi: '🎥 Streaming / Biblioteca Pesada',
      },
      progressTracking: {
        simple: '✅ Progresso Simples (Checklist)',
        dynamic: '⏳ Progresso Dinâmico (Save Point)',
      },
      checkoutType: {
        external: '🔗 Checkout Externo (Kiwify/Hotmart)',
        internal: '💳 Checkout Próprio (Stripe/Mercado Pago)',
      },
      adminPanel: {
        simple: '🛠️ Gestão Simplificada (Manual)',
        full: '⚙️ Gestão Completa (Painel ERP)',
      },
      userVolume: {
        small: '👶 Até 1.000 Alunos / Mês',
        large: '🏢 Escala 10.000+ Alunos',
      },
      simultaneousAccess: {
        distributed: '☁️ Acesso Distribuído',
        peak: '⚡ Pico de Acessos (Lançamentos)',
      },
      platformType: {
        web: '🌐 Site / Web App',
        native: '🍎 App Nativo (Lojas iOS/Android)',
      },
      launchDeadline: {
        urgent: '⚡ Urgente / Campanha Próxima',
        flexible: '📅 Qualidade / Cronograma Flexível',
      },
      budgetCeiling: {
        mvp: '💰 Investimento MVP (Essencial)',
        premium: '🏢 Escala Premium (Completo)',
      },
      maintenanceInterest: {
        yes: '🛠️ Tenho Interesse em Suporte Mensal',
        no: '📦 Apenas Entrega do Projeto',
      },
    };

    return maps[key]?.[value] || value;
  }
}
