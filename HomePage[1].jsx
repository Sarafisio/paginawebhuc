import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [satisfaction, setSatisfaction] = useState(5);
  const [observations, setObservations] = useState("");

  const handleLogin = () => {
    if (email === "admin@chuc.com" && password === "admin") {
      setIsLoggedIn(true);
      setIsAdmin(true);
    } else if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white p-6 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-blue-900 text-center">Bienvenido a MueveCHUC</h1>
          <p className="text-center text-gray-700">
            Tu espacio personal de movimiento y recuperación desde casa.
          </p>
          <p className="text-center text-sm text-gray-500 italic">
            Acceso exclusivo para pacientes dados de alta en el Hospital Universitario de Canarias.
          </p>

          <div className="space-y-4">
            <Input
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} className="w-full bg-blue-700 hover:bg-blue-800 text-white">
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    const pacientes = [
      { nombre: "Juan Pérez", sesiones: 5, ultimaConexion: "18/04/2025" },
      { nombre: "María González", sesiones: 3, ultimaConexion: "17/04/2025" },
      { nombre: "Carlos Díaz", sesiones: 7, ultimaConexion: "20/04/2025" },
    ];

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Panel del Fisioterapeuta</h1>
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre del Paciente</TableHead>
                <TableHead>Sesiones Realizadas</TableHead>
                <TableHead>Última Conexión</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pacientes.map((paciente, index) => (
                <TableRow key={index}>
                  <TableCell>{paciente.nombre}</TableCell>
                  <TableCell>{paciente.sesiones}</TableCell>
                  <TableCell>{paciente.ultimaConexion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Bienvenido a MueveCHUC</h1>
        <p className="text-lg text-gray-700 mb-4">
          Tu espacio personal de movimiento y recuperación desde casa.
        </p>
        <p className="text-md text-gray-600 mb-4">
          MueveCHUC es la plataforma diseñada por el Servicio de Fisioterapia del
          Hospital Universitario de Canarias para continuar la recuperación, mantener
          la motivación y mejorar el bienestar general.
        </p>
        <p className="text-lg font-semibold text-green-600 italic">
          "Cada pequeño movimiento cuenta. Sigue avanzando, estamos contigo."
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">¿Cómo te sentiste tras realizar tu rutina?</h2>
          <input
            type="range"
            min="1"
            max="10"
            value={satisfaction}
            onChange={(e) => setSatisfaction(e.target.value)}
            className="w-full"
          />
          <p className="mt-2 text-gray-700">Nivel de satisfacción: {satisfaction} / 10</p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">¿Quieres añadir alguna observación?</h2>
          <Textarea
            placeholder="Escribe aquí tus comentarios sobre la rutina, molestias, avances..."
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🦵</div>
            <h2 className="font-semibold text-lg mb-2">Fisioterapia Traumatológica</h2>
            <p className="text-sm text-gray-600">
              Para recuperar fuerza y movilidad tras lesiones musculoesqueléticas.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🌬️</div>
            <h2 className="font-semibold text-lg mb-2">Fisioterapia Respiratoria</h2>
            <p className="text-sm text-gray-600">
              Ejercicios y técnicas para mejorar tu capacidad pulmonar y respiración.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🧘</div>
            <h2 className="font-semibold text-lg mb-2">Mantenimiento / Mejora Funcional</h2>
            <p className="text-sm text-gray-600">
              Rutinas suaves para conservar y optimizar la movilidad y fuerza.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-10">
        <Button className="text-white bg-blue-700 hover:bg-blue-800">Acceder</Button>
      </div>
    </div>
  );
}
