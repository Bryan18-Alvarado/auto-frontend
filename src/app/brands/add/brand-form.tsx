// import React from "react";
"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { AddBrand } from "../brands.api";
import { BrandData } from "@/interfaces/brand.interface";

export function BrandForm() {
  const { register, handleSubmit } = useForm<BrandData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await AddBrand(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Marca</Label>
      <Input {...register("name")} />
      <Label>Descripcion</Label>
      <Input {...register("description")} />
      <Button>Agregar Marca</Button>
    </form>
  );
}

export default BrandForm;
