export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      carts: {
        Row: {
          product_id: number
          user_id: number
        }
        Insert: {
          product_id: number
          user_id: number
        }
        Update: {
          product_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "carts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "carts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      categories: {
        Row: {
          category_id: number
          category_value: string
        }
        Insert: {
          category_id?: number
          category_value: string
        }
        Update: {
          category_id?: number
          category_value?: string
        }
        Relationships: []
      }
      category_path: {
        Row: {
          category_id: number
          category_path_id: number
          subcategory_id: number
        }
        Insert: {
          category_id: number
          category_path_id?: number
          subcategory_id: number
        }
        Update: {
          category_id?: number
          category_path_id?: number
          subcategory_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "category_path_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "category_path_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "subcategories"
            referencedColumns: ["subcategory_id"]
          },
        ]
      }
      product_price_currency: {
        Row: {
          currency_id: number
          currency_value: string
        }
        Insert: {
          currency_id?: number
          currency_value: string
        }
        Update: {
          currency_id?: number
          currency_value?: string
        }
        Relationships: []
      }
      product_ratings: {
        Row: {
          rating_id: number
          rating_value: number
        }
        Insert: {
          rating_id?: number
          rating_value: number
        }
        Update: {
          rating_id?: number
          rating_value?: number
        }
        Relationships: []
      }
      product_statuses: {
        Row: {
          product_status_id: number
          product_status_value: string
        }
        Insert: {
          product_status_id?: number
          product_status_value: string
        }
        Update: {
          product_status_id?: number
          product_status_value?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          product_desc: string
          product_id: number
          product_img: string
          product_price_count: number
          product_price_currency: number
          product_rating: number
          product_tag: string
        }
        Insert: {
          product_desc: string
          product_id?: number
          product_img: string
          product_price_count: number
          product_price_currency: number
          product_rating: number
          product_tag: string
        }
        Update: {
          product_desc?: string
          product_id?: number
          product_img?: string
          product_price_count?: number
          product_price_currency?: number
          product_rating?: number
          product_tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_product_price_currency_fkey"
            columns: ["product_price_currency"]
            isOneToOne: false
            referencedRelation: "product_price_currency"
            referencedColumns: ["currency_id"]
          },
        ]
      }
      products_category_paths: {
        Row: {
          category_path_id: number
          product_id: number
        }
        Insert: {
          category_path_id: number
          product_id: number
        }
        Update: {
          category_path_id?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_category_paths_category_path_id_fkey"
            columns: ["category_path_id"]
            isOneToOne: false
            referencedRelation: "category_path"
            referencedColumns: ["category_path_id"]
          },
          {
            foreignKeyName: "products_category_paths_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      products_statuses: {
        Row: {
          product_id: number
          product_status_id: number
        }
        Insert: {
          product_id: number
          product_status_id: number
        }
        Update: {
          product_id?: number
          product_status_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_statuses_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "products_statuses_product_status_id_fkey"
            columns: ["product_status_id"]
            isOneToOne: false
            referencedRelation: "product_statuses"
            referencedColumns: ["product_status_id"]
          },
        ]
      }
      rating_history: {
        Row: {
          product_id: number
          rating_history_id: number
          rating_id: number
          user_id: number
        }
        Insert: {
          product_id: number
          rating_history_id?: number
          rating_id: number
          user_id: number
        }
        Update: {
          product_id?: number
          rating_history_id?: number
          rating_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "rating_history_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "rating_history_rating_id_fkey"
            columns: ["rating_id"]
            isOneToOne: false
            referencedRelation: "product_ratings"
            referencedColumns: ["rating_id"]
          },
          {
            foreignKeyName: "rating_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      subcategories: {
        Row: {
          subcategory_id: number
          subcategory_value: string
        }
        Insert: {
          subcategory_id?: number
          subcategory_value: string
        }
        Update: {
          subcategory_id?: number
          subcategory_value?: string
        }
        Relationships: []
      }
      user_favourites: {
        Row: {
          product_id: number
          user_id: number
        }
        Insert: {
          product_id: number
          user_id: number
        }
        Update: {
          product_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_favourites_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "user_favourites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_statuses: {
        Row: {
          user_status_id: number
          user_status_value: string
        }
        Insert: {
          user_status_id?: number
          user_status_value: string
        }
        Update: {
          user_status_id?: number
          user_status_value?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          user_email: string
          user_id: number
          user_name: string
          user_status_id: number
        }
        Insert: {
          user_email: string
          user_id?: number
          user_name: string
          user_status_id: number
        }
        Update: {
          user_email?: string
          user_id?: number
          user_name?: string
          user_status_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_user_status_id_fkey"
            columns: ["user_status_id"]
            isOneToOne: false
            referencedRelation: "user_statuses"
            referencedColumns: ["user_status_id"]
          },
        ]
      }
      users_rating_histories: {
        Row: {
          rating_history_id: number
          user_id: number
        }
        Insert: {
          rating_history_id: number
          user_id: number
        }
        Update: {
          rating_history_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_rating_histories_rating_history_id_fkey"
            columns: ["rating_history_id"]
            isOneToOne: false
            referencedRelation: "rating_history"
            referencedColumns: ["rating_history_id"]
          },
          {
            foreignKeyName: "users_rating_histories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
