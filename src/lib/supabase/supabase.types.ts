export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          date: string | null
          description: string | null
          id: string
          name: string
          time: string | null
        }
        Insert: {
          date?: string | null
          description?: string | null
          id?: string
          name?: string
          time?: string | null
        }
        Update: {
          date?: string | null
          description?: string | null
          id?: string
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      writings: {
        Row: {
          id: number
          name: string | null
          pdfid: string | null
          text: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          pdfid?: string | null
          text?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          pdfid?: string | null
          text?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
